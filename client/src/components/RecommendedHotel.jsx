import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useAppContext } from "../context/AppContext";

const RecommendedHotel = () => {
  const { rooms, searchedCities } = useAppContext();
  const [recommended, setRecommended] = useState([]);

  useEffect(() => {
    console.log("Searched Cities:", searchedCities);
    console.log("Rooms:", rooms);

    if (Array.isArray(rooms) && Array.isArray(searchedCities)) {
      const filteredHotels = rooms.filter(
        (room) => room?.hotel?.city && searchedCities.includes(room.hotel.city)
      );
      setRecommended(filteredHotels);
    } else {
      setRecommended([]);
    }
  }, [rooms, searchedCities]);

  return (
    recommended.length > 0 && (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
        <Title
          title="Recommended Hotels"
          subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalled luxury and unforgettable experiences."
        />
        <div className="flex flex-wrap items-center justify-between gap-6 mt-10">
          {recommended.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
          ))}
        </div>
      </div>
    )
  );
};

export default RecommendedHotel;
