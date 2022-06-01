import React, { useEffect, useState } from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import { SingleCoin } from "../../config/api";
import ReactHtmlParser from "react-html-parser";
import { Box, Container, LinearProgress, Typography } from "@material-ui/core";
import axios from "axios";
import SingleCoinChart from "../SingleCoinChart/SingleCoinChart";
const SingleCoinCap = ({ id }) => {
  const { dark, symbol, currency } = useGlobalContext();
  const classes = useStyles(dark);
  const [coin, setCoin] = useState([]);
  const name = id.charAt(0).toUpperCase() + id.slice(1);
  const fetchCoinData = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  if (!coin) {
    return <LinearProgress />;
  }

  return (
    <section className={classes.chartes}>
      <Container maxWidth="xl" className={classes.bigCont}>
        <Box className={classes.coinInfo}>
          <Box className={classes.infoMid}>
            <img src={coin?.image?.large} alt="" className={classes.infoImg} />
            <Typography
              variant="h2"
              style={{ fontWeight: "bold", marginBottom: 20 }}
            >
              {name}
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 20 }}>
              {ReactHtmlParser(coin?.description?.en?.slice(0, 188))}
            </Typography>
            <Typography variant="h4" style={{ marginBottom: 20 }}>
              Rank: {coin?.market_cap_rank}
            </Typography>
            <Typography variant="h4" style={{ marginBottom: 20 }}>
              Current Price: {symbol}{" "}
              {coin?.market_data?.current_price[currency.toLowerCase()]}
            </Typography>
            <Typography variant="h4" style={{ marginBottom: 20 }}>
              Market Cap: {symbol}{" "}
              {coin?.market_data?.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -6)}
            </Typography>
          </Box>
        </Box>
        <SingleCoinChart coin={coin} />
      </Container>
    </section>
  );
};

export default SingleCoinCap;
