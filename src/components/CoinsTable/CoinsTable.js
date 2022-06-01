import React, { useEffect, useState } from "react";
import useStyles from "./style";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Typography,
  TextField,
} from "@material-ui/core";
import { useGlobalContext } from "../../context";
import axios from "axios";
import { CoinList } from "../../config/api";
import { numberWithCommas } from "../../hooks/hook";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@material-ui/lab";
const CoinsTable = () => {
  const { symbol, currency, dark } = useGlobalContext();
  const classes = useStyles(dark);
  const [searchTerm, setSearchTerm] = useState("");
  const [coins, setCoins] = useState();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let navigation = useNavigate();
  const fetchCoinList = async () => {
    try {
      const { data } = await axios.get(CoinList(currency));
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const headArr = ["Coin", "Price", "24h Change", "Market Cap"];
  useEffect(() => {
    fetchCoinList();
    // eslint-disable-next-line
  }, [currency]);
  const handleSearch = () => {
    return coins?.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm) ||
        coin.symbol.toLowerCase().includes(searchTerm)
    );
  };
  return (
    <section className={classes.coinsTable}>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ margin: 17 }}>
          Cryptocurrency Prices by Market Cap
        </Typography>
        <TextField
          label="Search For a Crypto Currency.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div
          data-aos="flip-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <TableContainer component={Paper}>
            {loading ? (
              <LinearProgress style={{ backgroundColor: "orange" }} />
            ) : (
              <Table aria-label="simple table">
                <TableHead style={{ backgroundColor: "orange" }}>
                  <TableRow>
                    {headArr.map((head) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "16px",
                        }}
                        key={head}
                        align={head === "Coin" ? "inherit" : "right"}
                      >
                        {head}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {handleSearch()
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((row) => {
                      const profit = row.price_change_percentage_24h > 0;
                      return (
                        <TableRow
                          onClick={() => navigation(`/coins/${row.id}`)}
                          className={classes.row}
                          key={row.name}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              display: "flex",
                              gap: 15,
                            }}
                          >
                            <img
                              src={row?.image}
                              alt={row.name}
                              height="50"
                              style={{ marginBottom: 10 }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontSize: 22,
                                }}
                              >
                                {row.symbol}
                              </span>
                              <span style={{ color: "darkgrey" }}>
                                {row.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell align="right">
                            {symbol}{" "}
                            {numberWithCommas(row.current_price.toFixed(2))}
                          </TableCell>
                          <TableCell
                            align="right"
                            style={{
                              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                              fontWeight: 500,
                            }}
                          >
                            {profit && "+"}
                            {row.price_change_percentage_24h.toFixed(2)}%
                          </TableCell>
                          <TableCell align="right">
                            {symbol}{" "}
                            {numberWithCommas(
                              row.market_cap.toString().slice(0, -6)
                            )}
                            M
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            )}
          </TableContainer>

          <Pagination
            count={parseInt((handleSearch()?.length / 10).toFixed(0))}
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            classes={{ ul: classes.pagination }}
            onChange={(_, value) => {
              setPage(value);
            }}
          />
        </div>
      </Container>
    </section>
  );
};

export default CoinsTable;
