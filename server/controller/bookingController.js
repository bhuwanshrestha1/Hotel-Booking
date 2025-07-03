import transporter from "../configs/nodemailer.js";
import Booking from "../models/Booking.js";
import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//Function to check availability of room
const checkAvailability = async ({ checkInDate, checkOutDate, room }) => {
  try {
    const bookings = await Booking.find({
      room,
      checkInDate: { $lte: checkOutDate },
      checkOutDate: { $gte: checkInDate },
    });
    const isAvailable = bookings.length === 0;
    return isAvailable;
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Api to check availability of room
// POST /api/bookings/check-availability
export const checkAvailabilityAPI = async (req, res) => {
  try {
    const { room, checkInDate, checkOutDate } = req.body;
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });
    res.json({ success: true, isAvailable });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//Api to create a new booking
// POST /api/bookings/book

export const createBooking = async (req, res) => {
  console.log("createBooking called");
  try {
    console.log("Incoming Booking Payload:", req.body);

    const { room, checkInDate, checkOutDate, guests } = req.body;
    const user = req.user._id;

    // Check availability
    const isAvailable = await checkAvailability({
      checkInDate,
      checkOutDate,
      room,
    });

    if (!isAvailable) {
      return res.json({ success: false, message: "Room is not available." });
    }

    // Fetch room and hotel data
    const roomData = await Room.findById(room).populate("hotel");
    if (!roomData) {
      return res.json({ success: false, message: "Room not found." });
    }

    // Calculate total price
    let totalPrice = roomData.pricePerNight || 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    totalPrice *= nights;

    // Create booking
    const booking = await Booking.create({
      user,
      room,
      hotel: roomData.hotel._id,
      guests: Number(guests),
      checkInDate,
      checkOutDate,
      totalPrice,
    });

    // Send confirmation email
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: req.user.email, // make sure this exists
      subject: "Hotel Booking Confirmation",
      html: `
        <h2>Booking Confirmation</h2>
        <p>Dear ${req.user.username || "Guest"},</p>
        <p>Thank you for your booking! Here are the details:</p>
        <ul>
          <li><strong>Booking ID:</strong> ${booking._id}</li>
          <li><strong>Hotel:</strong> ${roomData.hotel.name}</li>
          <li><strong>Location:</strong> ${roomData.hotel.address}</li>
          <li><strong>Check-In:</strong> ${new Date(
            booking.checkInDate
          ).toDateString()}</li>
          <li><strong>Check-Out:</strong> ${new Date(
            booking.checkOutDate
          ).toDateString()}</li>
          <li><strong>Guests:</strong> ${booking.guests}</li>
          <li><strong>Total Price:</strong> ${process.env.CURRENCY || "$"} ${
        booking.totalPrice
      }</li>
        </ul>
        <p>If you need to make changes, contact us anytime.</p>
        <p>We look forward to your stay!</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Confirmation email sent:", info.messageId);
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError.message);
    }

    res.json({ success: true, message: "Booking created successfully" });
  } catch (error) {
    console.error("Booking failed:", error.message);
    res.json({ success: false, message: "Booking Failed" });
  }
};

//API to get all bookings for a user
// GET /api/bookings/user

export const getUserBookings = async (req, res) => {
  try {
    const user = req.user._id;
    const bookings = await Booking.find({ user })
      .populate("room hotel")
      .sort({ createdAt: -1 });
    res.json({ success: true, bookings });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};

//API to get all bookings for a hotel
// GET /api/bookings/hotel

export const getHotelBookings = async (req, res) => {
  try {
    const hotel = await Hotel.findOne({ owner: req.auth.userId });
    if (!hotel) {
      return res.json({ success: false, message: "No hotel found" });
    }
    const bookings = await Booking.find({ hotel: hotel._id })
      .populate("room hotel user")
      .sort({ createdAt: -1 });

    //Total Bookings
    const totalBookings = bookings.length;

    //Total Revenue
    const totalRevenue = bookings.reduce(
      (acc, booking) => acc + booking.totalPrice,
      0
    );
    res.json({
      success: true,
      dashboardData: { totalBookings, totalRevenue, bookings },
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed to fetch bookings" });
  }
};
