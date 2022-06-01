import { makeStyles } from "@material-ui/styles";
export default makeStyles((theme) => ({
  coinsTable: {
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.secondary.main,
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  row: {
    backgroundColor: (dark) => (dark ? "#16171a" : "#f5f5f5"),
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: (dark) => (dark ? "#131111" : "#ECECEF"),
    },
    //ECECEF
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "orange",
    },
  },
}));
