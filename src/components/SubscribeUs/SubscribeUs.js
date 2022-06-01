import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useGlobalContext } from "../../context";
import useStyles from "../Footer/style";
const SubscribeUs = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={classes.subscribe}>
      <Typography variant="h6" className={classes.title}>
        Subscribe Us
      </Typography>
      <div className={classes.underline}></div>
      <Typography variant="subtitle1" style={{ marginTop: 35 }}>
        Lorem ipsum dolor sit amet, consect ascing elit, sed do eiusmod
      </Typography>
      <TextField
        placeholder="Enter email ..."
        variant="outlined"
        style={{ marginTop: 25 }}
      />
      <Button
        className={classes.subBtn}
        variant="contained"
        type="submit"
        onClick={handleSubmit}
      >
        Subscribe
      </Button>
    </section>
  );
};

export default SubscribeUs;
