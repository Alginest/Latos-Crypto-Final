import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import LoupeIcon from "@material-ui/icons/Loupe";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BookIcon from "@material-ui/icons/Book";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 999,
    backgroundColor: (dark) => (dark ? "#171717" : "#faf0f0"),

    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    [theme.breakpoints.up("xs")]: {},
  },
  action: {
    maxWidth: 168,
    minWidth: 40,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 100,
    },
  },
  icon: {
    color: (dark) => (dark ? "#fff" : "#171717"),
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
    },
  },
}));
const handleClick = () => {
  window.scroll(0, 0);
};

const MobileNav = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      className={classes.bottomNav}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        className={classes.action}
        icon={
          <Link to="/" onClick={handleClick}>
            <HomeIcon className={classes.icon} />
          </Link>
        }
      />
      <BottomNavigationAction
        label="About"
        value="about"
        className={classes.action}
        icon={
          <Link to="/about" onClick={handleClick}>
            <ImportContactsIcon className={classes.icon} />{" "}
          </Link>
        }
      />
      <BottomNavigationAction
        label="Service"
        value="service"
        className={classes.action}
        icon={
          <Link to="/service" onClick={handleClick}>
            <LoupeIcon className={classes.icon} />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Shop"
        value="shop"
        className={classes.action}
        icon={
          <Link to="/shop" onClick={handleClick}>
            <ShoppingCartIcon className={classes.icon} />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Blog"
        value="blog"
        className={classes.action}
        icon={
          <Link to="/blog" onClick={handleClick}>
            <BookIcon className={classes.icon} />
          </Link>
        }
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        className={classes.action}
        icon={
          <Link to="/contact" onClick={handleClick}>
            <ContactPhoneIcon className={classes.icon} />
          </Link>
        }
      />
    </BottomNavigation>
  );
};

export default MobileNav;
