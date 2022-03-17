import React from "react";

interface Iroom {
  id: string;
  name: string;
  occupancy: { maxAdults: number; maxChildren: number };
  longDescription: string;
}

const HotelRoom: React.FC<{ room: Iroom }> = ({ room }) => {
  return (
    <div className="hotel__container--room" key={room.id}>
      <div className="container__room">
        <div className="container__room__information">
          <span className="container__room__information--title">
            {room.name}
          </span>
          <span className="container__room__information--additional">
            Adult:{room.occupancy.maxAdults}
          </span>
          <span className="container__room__information--additional">
            Children:{room.occupancy.maxChildren}
          </span>
        </div>
        <div className="container__room__description">
          {room.longDescription}
        </div>
      </div>
    </div>
  );
};

export default HotelRoom;
