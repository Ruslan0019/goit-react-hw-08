import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/contacts/filterSlice";
import css from "./filter.module.css";
const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={css.label}>
      Filter by name:
      <input type="text" onChange={(e) => dispatch(setFilter(e.target.value))} />
    </label>
  );
};

export default Filter;
