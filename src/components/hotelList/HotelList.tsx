import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getHotelList, getHotelRooms } from "../../common/apis/apiHotelList";
import HotelBox from "./HotelList/HotelBox";
import "./hotelList.css";
import { IhotelData, IroomProps } from "./Hotel.interfaces";
import HotelNotFound from "./HotelNotFound";
import { IinitalState as FilterOptions } from "../../common/redux/index";
import HotelPending from "./HotelPending";

const HotelList = () => {
  const filterOptions = useSelector(
    (state: { filterOptions: FilterOptions }) => {
      return state.filterOptions;
    }
  );

  const [hotelList, setHotelList] = useState<IhotelData[]>([]);
  const [roomList, setRoomList] = useState<object[]>([]);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [displayNoMatchResutlt, setDisplayNoMatchResutlt] =
    useState<boolean>(false);

  const apiHotel = useCallback(async () => {
    const data = await getHotelList;
    return setHotelList(data.data);
  }, []);

  const apiRoom = useCallback(() => {
    if (hotelList) {
      return hotelList.map(async (rooms: { id: string }) => {
        const data = await getHotelRooms(rooms.id);
        return setRoomList((prev: object[]) => [...prev, data.data]);
      });
    }
  }, [hotelList]);

  useEffect(() => {
    apiHotel().then(() => apiRoom());
  }, [apiHotel, apiRoom]);

  const checkAvibilityRooms = () => {
    const result = roomList.map((roomList: any) =>
      roomList.rooms.filter((room: IroomProps) => {
        return (
          filterOptions.adults <= room.occupancy.maxAdults &&
          filterOptions.children <= room.occupancy.maxChildren
        );
      })
    );
    return result;
  };

  const avibilityRooms = checkAvibilityRooms();

  const checkHotelStars = useCallback(
    (starRating: number) => {
      return filterOptions.stars <= starRating;
    },
    [filterOptions.stars]
  );

  const checkDisplayHotel = useCallback(
    (index: number): boolean => {
      if (avibilityRooms[index]) {
        if (isPending) {
          setIsPending(false);
        }
        if (
          avibilityRooms[index].length !== 0 &&
          checkHotelStars(hotelList[index].starRating)
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    [avibilityRooms, checkHotelStars, hotelList, isPending]
  );

  const checkDisplayNoMatchResutlt = useCallback(() => {
    let data: boolean[] = [];
    if (avibilityRooms) {
      for (let i = 0; i <= avibilityRooms.length - 1; i++) {
        data.push(checkDisplayHotel(i));
      }

      const result = data.every((val: boolean) => val === false);
      setDisplayNoMatchResutlt(result);
    }
  }, [avibilityRooms, checkDisplayHotel]);

  useEffect(() => {
    checkDisplayNoMatchResutlt();
  }, [avibilityRooms, checkDisplayNoMatchResutlt]);

  return isPending ? (
    <HotelPending />
  ) : displayNoMatchResutlt ? (
    <HotelNotFound />
  ) : (
    <div className="hotelList">
      {hotelList.map((hotelData: IhotelData, index: number) => {
        return (
          checkDisplayHotel(index) && (
            <HotelBox
              key={`hotelList${index}`}
              hotelData={hotelData}
              hotelId={index}
              checkAvibilityRooms={avibilityRooms}
            />
          )
        );
      })}
    </div>
  );
};

export default HotelList;
