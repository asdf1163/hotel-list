import { useSelector, useDispatch } from "react-redux";
import { changeOption } from "../../common/redux/filterOptions/filterOptionsActions";
import StarsFilter from "./StarsFilter";
import {
  IinitalState as IFilterOptions,
  IchangeOption as IHandleChange,
} from "../../common/redux/index";

const FilterOptions = () => {
  const dispatch = useDispatch();
  const filterOptions = useSelector(
    (state: { filterOptions: IFilterOptions }) => {
      return state.filterOptions;
    }
  );

  function handleChange(
    param: IHandleChange["stateName"],
    initialValue: IHandleChange["result"]
  ) {
    dispatch(changeOption({ stateName: param, result: initialValue }));
  }

  return (
    <div className="navbar__filter">
      <span className="navbar__filter--category">
        <StarsFilter stars={filterOptions.stars} handleChange={handleChange} />
      </span>
      <span className="navbar__filter--category">
        Adults:
        <span className="navbar__filter--option">
          <button className="navbar__filter--button" onClick={() => handleChange("adults", -1)}>-</button>
          {filterOptions.adults}
          <button className="navbar__filter--button" onClick={() => handleChange("adults", 1)}>+</button>
        </span>
      </span>
      <span className="navbar__filter--category">
        Children:
        <span className="navbar__filter--option">
          <button className="navbar__filter--button" onClick={() => handleChange("children", -1)}>-</button>
          {filterOptions.children}
          <button className="navbar__filter--button" onClick={() => handleChange("children", 1)}>+</button>
        </span>
      </span>
    </div>
  );
};

export default FilterOptions;
