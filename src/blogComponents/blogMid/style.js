import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blog: {
    width: "100%",
    height: "auto",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
  bigCont: {
    width: "100%",
    height: "auto",
  },
  gridCont: {
    width: "100%",
    height: "auto",
  },
  blogItem: {
    width: 750,
    height: 770,
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "auto",
      paddingBottom: 50,
    },
  },
  dateBox: {
    position: "absolute",
    top: "45px",
    left: "35px",
    display: "flex",
  },
  date: {
    padding: "5px 15px",
    backgroundColor: "#222",
    color: "white",
  },
  dateSpan: {
    color: "white",
    padding: "5px 15px",
    backgroundColor: "orange",
  },
  img: {
    width: "100%",
  },
  smCont: {
    marginTop: 30,
  },
  text: {
    lineHeight: 1.8,
  },

  /* Right Side*/
  searchBox: {
    width: "100%",
    height: 110,
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderTop: (dark) => (dark ? "3px solid #fff" : "3px solid #222"),
  },
  field: {
    width: "80%",
    height: "auto",
  },
  mostRead: {
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    borderTop: (dark) => (dark ? "3px solid #fff" : "3px solid #222"),
    width: "100%",
    height: "auto",
    paddingBottom: 30,
    marginTop: 50,
  },
  underline: {
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    width: "90%",
    height: 1,
    marginTop: 5,
  },
  linkIpsum: {
    transition: "color 0.3s ease-in",
    "&:hover": {
      color: "orange",
    },
  },
  author: {
    marginTop: 50,
    width: "100%",
  },
  underlineBig: {
    backgroundColor: (dark) => (dark ? "#fff" : "#222"),
    width: "93%",
    height: 1,
    marginTop: 5,
    marginBottom: 35,
  },
  authorBox: {
    width: "93%",
    height: 300,
    backgroundColor: (dark) => (dark ? "#222" : "rgb(245, 245, 245)"),
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      paddingBottom: 20,
      alignItems: "center",
    },
  },
  leftBox: {
    width: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  imgAut: {
    width: 120,
    height: 120,
    borderRadius: 60,
    border: (dark) => (dark ? "3px solid #fff" : "3px solid #222"),
  },
  authTitle: {
    fontWeight: 700,
    marginBottom: 20,
  },
  authBod: {
    lineHeight: 1.8,
    width: "95%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0 20px",
    },
  },
  rightBox: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      marginTop: 20,
    },
  },
  spreadBox: {
    width: "93%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  inputF: {
    width: "47%",
    margin: "10px 0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  multiline: {
    width: "93%",
  },
  subBtn: {
    width: 200,
    height: 50,
    borderRadius: 50,
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 50,
    color: "white",
    background: "linear-gradient(to right, #fdc830, #f37335)",
    transition: "all 0.3s ease-in",
    marginTop: 30,
    "&:hover": {
      background: "linear-gradient(to left, #fdc830, #f37335)",
    },
  },
  cates: {
    margin: "20px",
  },
  event: {
    margin: "20px 0",
  },
  dateEve: {
    display: "flex",
  },
  frame: {
    marginTop: 20,
  },
  tagBtnBox: {
    width: "80%",
  },
  tagBtn: {
    padding: "10px 25px",
    borderRadius: 50,
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
    background: "linear-gradient(to right, #fdc830, #f37335)",
    transition: "all 0.3s ease-in",
    marginTop: 30,
    "&:hover": {
      background: "linear-gradient(to left, #fdc830, #f37335)",
    },
  },
}));
