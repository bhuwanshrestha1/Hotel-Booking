import React, { useState } from "react";

const roomsDummyData = [
  {
    _id: "1",
    roomType: "Double Bed",
    amenities: ["Room Service", "Mountain View", "Pool Access"],
    pricePerNight: 399,
    isAvailable: true,
  },
  {
    _id: "2",
    roomType: "Single Bed",
    amenities: ["Free WiFi", "Room Service", "Pool Access"],
    pricePerNight: 199,
    isAvailable: false,
  },
];

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Room Listings</h1>

      <div className="w-full max-w-3xl border border-gray-300 rounded-lg max-h-80 overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden text-left">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                Price / night
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Available
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={item._id} className="border-t border-gray-300">
                <td className="py-3 px-4 text-gray-700">{item.roomType}</td>
                <td className="py-3 px-4 text-gray-700 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  ${item.pricePerNight}
                </td>
                <td className="py-3 px-4 text-center">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() => {
                        const updatedRooms = rooms.map((room, i) =>
                          i === index
                            ? { ...room, isAvailable: !room.isAvailable }
                            : room
                        );
                        setRooms(updatedRooms);
                      }}
                    />
                    <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
