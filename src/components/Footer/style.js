import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
    [theme.breakpoints.down("md")]: {
      height: "",
    },
  },
  bigCont: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      height: "auto",
      paddingBottom: "100px",
    },
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
    },
  },
  logoBox: {
    width: 360,
    height: 255,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
    },
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  socials: {
    display: "flex",
    marginTop: "30px",
  },
  //services
  ourServices: {
    width: 165,
    height: 260,
    [theme.breakpoints.down("md")]: {
      margin: "100px 0",
    },
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: 1.5,
  },
  underline: {
    width: 70,
    height: 2,
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    margin: "20px 0",
  },
  mineBox: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  link: {
    fontWeight: "bold",
    fontSize: "16",
    transition: "all 0.8 ease-in !important",
    cursor: "pointer",
    "&:hover": {
      color: "orange",
      textDecoration: "none",
      transform: "scale(1.1)",
    },
  },
  //posts
  posts: {
    width: 280,
    height: 260,
    [theme.breakpoints.down("md")]: {
      margin: "50px 0",
    },
  },
  postBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 100,
  },
  postLink: {
    lineHeight: 1.7,
    fontSize: 17,
    cursor: "pointer",
  },
  //subscribe us
  subscribe: {
    width: 300,
    height: 270,
    [theme.breakpoints.down("md")]: {
      margin: "50px 0",
    },
  },
  subBtn: {
    background: "linear-gradient(to right, #fdc830, #f37335)",
    color: "#fff !important",
    width: 170,
    height: 50,
    borderRadius: 30,
    marginTop: "30px",
    cursor: "pointer",
    transition: "all 0.3s ease-in !important",
    fontWeight: "bold !important",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
