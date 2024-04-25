import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsImage from "../../assests/meals.jpeg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImage} alt="A table full delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
