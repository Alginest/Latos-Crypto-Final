import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import LocalAirportIcon from "@material-ui/icons/LocalAirport";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import TimerIcon from "@material-ui/icons/Timer";
const ContactForm = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.contactForm}>
      <Container className={classes.bigCont} maxWidth="xl">
        <Box className={classes.boxLeft}>
          <Typography variant="h6" className={classes.title}>
            {" "}
            Contact Us
          </Typography>
          <Box className={classes.infoBox}>
            <Typography variant="subtitle1" className={classes.subTitle}>
              <Box className={classes.iconBox}>
                <LocalAirportIcon className={classes.icon} />
              </Box>
              2369 Robinson Lane Jackson, OH 45640
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              <Box className={classes.iconBox}>
                <PhoneIcon className={classes.icon} />
              </Box>
              (+1) 740-395-3829
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              <Box className={classes.iconBox}>
                <MailIcon className={classes.icon} />
              </Box>
              Info@example.com
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              <Box className={classes.iconBox}>
                <TimerIcon className={classes.icon} />
              </Box>
              Mon - Fri: 08.00 - 16.00
            </Typography>
          </Box>
        </Box>
        <Box className={classes.formBox}>
          <Box className={classes.topForm}>
            <TextField
              id="filled-basic"
              label="Name"
              variant="filled"
              className={classes.topBoxField}
            />
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              className={classes.topBoxField}
            />
          </Box>
          <TextField
            id="filled-basic"
            label="Subject"
            variant="filled"
            className={classes.subject}
          />
          <TextField
            id="filled-multiline-static"
            label="Your Message"
            multiline
            minRows={8}
            maxRows={8}
            variant="filled"
            className={classes.multiline}
          />
          <Button variant="contained" className={classes.btnSub}>
            Send Message
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default ContactForm;
