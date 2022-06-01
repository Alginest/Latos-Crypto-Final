import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("md")]: {
      height: "1200px",
    },
  },

  midBox: {
    width: "1200px",
    height: "500px",
    display: "flex",
    zIndex: 1,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "800px",
      width: "100%",
    },
  },
  leftBox: {
    width: "50%",
    height: "400px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },

  socialIcons: {
    width: "100%",
    marginBottom: "30px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "space-around",
    },
  },
  iconButton: {
    margin: "0 5px",
    border: `3px solid ${theme.palette.primary.light}`,
  },
  title: {
    width: "100%",
    marginBottom: "40px",
    fontSize: 50,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
      textAlign: "center",
    },
  },
  btnBox: {
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  leftBtn: {
    backgroundColor: "#222",
    color: "#fff",
    border: `1px solid white`,
    padding: "18px 40px",
    borderRadius: "20px",
    zIndex: 10,
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "all 0.3s ease-in",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "20px",
      width: "80%",
    },
  },
  btnRight: {
    marginLeft: "50px",
    backgroundColor: "#222",
    color: "#fff",
    border: `1px solid white`,
    padding: "18px 50px",
    borderRadius: "20px",
    zIndex: 10,
    fontSize: "16px",
    fontWeight: "bold",
    textTransform: "uppercase",
    transition: "all 0.3s ease-in",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginTop: "20px",
      width: "80%",
    },
  },
  rightBox: {
    width: "50%",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginTop: 100,
    },
  },
  gridCont: {
    width: "100%",
    display: "flex",
    height: "350px",
  },
  gridSet: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    width: "130px",
    height: "200px",
    marginLeft: "1px",
    backgroundImage: `url(
      "data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${theme.palette.primary.light}' stroke-width='10' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e"
    )`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "150px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90px",
    },
  },
}));
