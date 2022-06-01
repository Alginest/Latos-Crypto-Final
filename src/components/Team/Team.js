import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useGlobalContext } from "../../context";
import { team } from "../../localData/teamData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const Team = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  const renderNextButton = ({ isDisabled }) => {
    return (
      <ArrowForwardIosIcon
        className={classes.arrowRight}
        style={{ color: "orange", marginTop: 10, cursor: "pointer" }}
      />
    );
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <ArrowBackIosIcon
        className={classes.arrowLeft}
        style={{ color: "orange", cursor: "pointer" }}
      />
    );
  };

  const responsive = {
    560: {
      items: 1,
    },
    760: {
      items: 1,
    },
    1204: {
      items: 2,
    },
    1506: {
      items: 3,
    },
    1806: {
      items: 4,
    },
  };
  const items = team.map((person) => {
    return (
      <Box className={classes.caroWrap}>
        <Box key={person.id} className={classes.memberBox}>
          <img
            src={person.img}
            alt={person.name}
            className={classes.memberImg}
          />
          <Typography
            variant="h6"
            align="center"
            style={{ marginBottom: "5px", fontWeight: "bold" }}
          >
            {person.name}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ marginBottom: "5px" }}
          >
            {person.profession}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            style={{ marginBottom: "5px" }}
          >
            Email: {person.email}
          </Typography>
        </Box>
      </Box>
    );
  });
  return (
    <section className={classes.team}>
      <Container className={classes.bigCont}>
        <Typography variant="h2" align="center">
          Meet Our Team
        </Typography>
        <Box className={classes.center}>
          <div className={classes.underline}></div>
        </Box>
        <Box className={classes.center}>
          <Typography variant="body1" align="center" className={classes.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            dolorem dicta libero veritatis reiciendis quis pariatur magni.
          </Typography>
        </Box>

        <AliceCarousel
          mouseTracking
          autoPlayInterval={5000}
          infinite={true}
          animationDuration={1500}
          disableDotsControls
          items={items}
          responsive={responsive}
          keyboardNavigation={true}
          renderPrevButton={renderPrevButton}
          renderNextButton={renderNextButton}
        />
      </Container>
    </section>
  );
};

export default Team;
