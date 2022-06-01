import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { numberWithCommas } from "../../hooks/hook";
const useStyles = makeStyles((theme) => ({
  outerBox: {
    width: "100%",
    height: 250,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
  },
  bigCont: {
    width: "350px",
    height: 230,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: (props) =>
      props.dark
        ? "5px 5px 5px 0px rgba(150,150,150,0.75)"
        : "10px 10px 5px 0px rgba(0,0,0,0.75)",
  },
  imgCont: {
    display: "flex",
  },
  img: {
    width: 60,
  },
  coinTitle: {
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
  },
  btnCoin: {
    backgroundColor: (props) =>
      props.dark ? "#222 !important" : "#fff !important",
    color: (props) => (props.dark ? "#fff !important" : "#222 !important"),
    width: 150,
    height: 40,
    borderRadius: 30,
    cursor: "pointer",
    transition: "color 0.3s ease-in !important",
    fontWeight: "bold !important",
    "&:hover": {
      color: "#f7931a !important",
    },
  },
}));
const SingleCoin = ({ c }) => {
  const { symbol, dark } = useGlobalContext();
  const props = {
    boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
    dark: dark,
  };

  const classes = useStyles(props);
  let difference = c.price_change_percentage_24h >= 0;

  return (
    <Box className={classes.outerBox}>
      <Container className={classes.bigCont}>
        <Box className={classes.imgCont}>
          <img src={c?.image} alt={c?.title} className={classes.img} />
          <Typography
            variant="h5"
            className={classes.coinTitle}
            color="secondary"
          >
            {c?.name}
          </Typography>
        </Box>
        <Typography color="secondary" style={{ fontWeight: "bold" }}>
          {c?.symbol}&nbsp;
          <Typography
            component={"span"}
            style={{
              color: difference > 0 ? "rgb(14,203,129)" : "red",
              marginLeft: 5,
              fontWeight: "bold",
            }}
          >
            {difference && "+"}
            {c?.price_change_percentage_24h?.toFixed(2)}%
          </Typography>
        </Typography>
        <Typography
          style={{ fontSize: 22, fontWeight: 500, marginBottom: 10 }}
          color="secondary"
        >
          {symbol} {numberWithCommas(c?.current_price.toFixed(2))}
        </Typography>
        <Link to={`/coins/${c.id}`}>
          <Button variant="contained" className={classes.btnCoin}>
            {c.name}
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default SingleCoin;
