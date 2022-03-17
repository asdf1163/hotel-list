import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface Iprops {
  stars: number;
  size: number;
}

const CreateStars = ({ stars, size }: Iprops) => {
  const starsObject = {};
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      Object.assign(starsObject, { [i]: <AiFillStar size={size} /> });
    } else {
      Object.assign(starsObject, { [i]: <AiOutlineStar size={size} /> });
    }
  }
  return starsObject;
};

export default CreateStars;
