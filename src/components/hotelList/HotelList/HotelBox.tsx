import CreateStars from "../../elements/stars/CreateStars";
import HotelRoom from "./HotelRoom";
import { IhotelData } from "../Hotel.interfaces";
import HotelImages from "./HotelImages";

const HotelBox: React.FC<{
  hotelData: IhotelData;
  hotelId: number;
  checkAvibilityRooms: object[];
}> = ({ hotelData, hotelId, checkAvibilityRooms }) => {
  const starIconSize = 30;
  return (
    <div className="hotel__container" key={hotelData.id}>
      <div className="hotel__container--main">
        <div className="container__main">
          <div className="container__main__image">
            {hotelData.images && (
              <HotelImages
                hotelImages={hotelData.images}
                hotelId={hotelData.id}
              />
            )}
          </div>
          <div className="container__main--information">
            <span className="container__main__information--name">
              {hotelData.name}
            </span>
            <span className="container__main__information--address">
              {`${hotelData.town} , ${hotelData.country}`}
            </span>
            <span className="container__main__information--address">
              {`${hotelData.address1}`} {hotelData.address2 !== "" && `, ${hotelData.address2}` } 
            </span>
          </div>
          <div className="container__main--stars">
            {Object.values<object>(
              CreateStars({ stars: hotelData.starRating, size: starIconSize })
            ).map((data, index: number) => (
              <span key={`starRating${hotelData.id}ID${index}`}>{data}</span>
            ))}
          </div>
        </div>
      </div>
      {Object.values(checkAvibilityRooms[hotelId]).map(
        (room, index: number) => {
          return (
            <HotelRoom key={`hotelRoom${hotelId}Id${index}`} room={room} />
          );
        }
      )}
    </div>
  );
};

export default HotelBox;
