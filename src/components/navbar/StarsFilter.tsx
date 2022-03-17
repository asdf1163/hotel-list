import { useEffect, useState } from "react";
import CreateStars from "../elements/stars/CreateStars";
import { IchangeOption as IHandleChange } from "../../common/redux/index";

interface Iprops {
  stars: number;
  handleChange: (
    stateName: IHandleChange["stateName"],
    result: IHandleChange["result"]
  ) => void;
}
const starIconSize = 20;

const StarsFilter = ({ stars, handleChange }: Iprops) => {
  const [starsList, setStarsList] = useState({});

  useEffect(() => {
    setStarsList(() => CreateStars({ stars: stars, size: starIconSize }));
  }, [stars]);

  return (
    <div className="navbar__filter--starCollection">
      {Object.values<object>(starsList).map((data, index: number) => (
        <span
          onClick={() => handleChange("stars", index + 1)}
          key={`starFilter${index}`}
          className="navbar__filter--star"
        >
          {data}
        </span>
      ))}
    </div>
  );
};

export default StarsFilter;
