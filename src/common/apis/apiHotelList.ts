import axios from "axios";

export const getHotelList = axios.get('https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG')
export const getHotelRooms = (hotelId: string) => axios.get(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${hotelId}`)