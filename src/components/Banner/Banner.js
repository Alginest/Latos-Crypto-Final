import React, { useEffect, useState } from "react";
import SingleCoin from "../SingleCoin/SingleCoin";
import { makeStyles, Typography } from "@material-ui/core";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import Loading from "../Loading/Loading";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const useStyles = makeStyles((theme) => ({
  banner: {
    width: "100%",
    height: 500,
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "100px",
  },
}));
const Banner = () => {
  const { dark, currency } = useGlobalContext();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTrendingCoins = async () => {
    try {
      const { data } = await axios.get(TrendingCoins(currency));
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line
  }, [currency]);
  const responsive = {
    560: {
      items: 1,
    },
    760: {
      items: 2,
    },
    1204: {
      items: 3,
    },
    1506: {
      items: 4,
    },
    1806: {
      items: 5,
    },
  };
  const items = coins.map((c) => {
    return <SingleCoin c={c} key={c.id} />;
  });
  const classes = useStyles(dark);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className={classes.banner}>
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        Trending Coins
      </Typography>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          items={items}
          responsive={responsive}
        />
      </div>
    </section>
  );
};

export default Banner;
