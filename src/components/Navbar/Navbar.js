import {
  AppBar,
  Container,
  makeStyles,
  MenuItem,
  Select,
  Switch,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import BitCoinLogo from "../../images/BTC_Logo.svg";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: "#f50057",
    "&.Mui-disabled": {
      color: "#e886a9",
    },
    "&.Mui-checked": {
      color: "#95cc97",
    },
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#222",
    },
  },
  switch_track: {
    backgroundColor: "#fff",
    "&.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#4CAF50",
    },
  },
  header: {
    width: "100%",
  },
  AppBar: {
    width: "100%",
    height: "100px",
  },
  bigCont: {
    height: "inherit",
    alignItems: "center",
  },
  toolbar: {
    height: "inherit",
    alignItems: "center",
  },
  coin: {
    marginLeft: 5,
    color: theme.palette.primary.main,
  },
  logo: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    cursor: "pointer",
  },
  list: {
    height: "inherit",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  link: {
    width: "100%",
    color: (dark) => (dark ? "#fff" : "#222"),
    fontSize: 16,
    fontWeight: "bold",
    cursor: "pointer",
    textTransform: "uppercase",
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "#f7931a",
    },
  },
  root: {
    height: 42,
    width: 60,
  },
  img: {
    width: 50,
    height: 50,
  },
  select: {
    width: 100,
    height: 40,
    marginRight: 15,
    [theme.breakpoints.down("xs")]: {
      marginLeft: 15,
    },
  },
}));
const Navbar = () => {
  const [switchState, setSwitchState] = React.useState(false);
  const [scrolledY, setScrolledY] = useState(0);
  const { dark, setDark, currency, setCurrency } = useGlobalContext();

  let navigate = useNavigate();
  const classes = useStyles(dark);

  const handleChange = () => {
    setSwitchState(!switchState);
    setDark(!dark);
  };
  const scrollWindow = () => {
    let winY = window.scrollY;
    setScrolledY(winY);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);

    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  return (
    <div
      data-aos="zoom-in"
      data-aos-easing="ease-in-sine"
      data-aos-duration="600"
    >
      <section className={classes.header}>
        <AppBar
          color={scrolledY <= 110 ? "transparent" : "default"}
          position="fixed"
          elevation={scrolledY <= 110 ? 0 : 4}
          className={classes.AppBar}
        >
          <Container className={classes.bigCont}>
            <Toolbar className={classes.toolbar}>
              <Typography
                className={classes.logo}
                color="secondary"
                variant="h4"
                onClick={() => navigate("/")}
              >
                <img src={BitCoinLogo} alt="" className={classes.img} />
                <Typography
                  variant="h4"
                  component="span"
                  className={classes.coin}
                >
                  icon
                </Typography>
              </Typography>
              <Select
                variant="outlined"
                defaultValue={""}
                className={classes.select}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"EUR"}>EUR</MenuItem>
              </Select>
              <div className={classes.list}>
                <li className={classes.listItem}>
                  <Link
                    to="/"
                    className={classes.link}
                    style={{ textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link
                    to="/about"
                    className={classes.link}
                    style={{ textDecoration: "none" }}
                  >
                    About
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link
                    to="/service"
                    className={classes.link}
                    style={{ textDecoration: "none" }}
                  >
                    Service
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link
                    to="/shop"
                    className={classes.link}
                    style={{ textDecoration: "none" }}
                  >
                    Shop
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link
                    to="/blog"
                    className={classes.link}
                    style={{ textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                </li>
                <li className={classes.listItem}>
                  <Link
                    to="/contact"
                    className={classes.link}
                    style={{ textDecoration: "none" }}
                  >
                    Contact
                  </Link>
                </li>
              </div>
              <Switch
                checked={switchState}
                icon={<Brightness4Icon />}
                checkedIcon={<Brightness7Icon />}
                onChange={handleChange}
                classes={{
                  root: classes.root,
                  switchBase: classes.switchBase,
                  track: classes.switch_track,
                  thumb: classes.thumb,
                }}
                inputProps={{ "aria-label": "secondary checkbox" }}
                style={{ color: dark ? "#fff" : "#222" }}
              />
            </Toolbar>
          </Container>
        </AppBar>
      </section>
    </div>
  );
};

export default Navbar;
