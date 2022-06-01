import React from "react";
import useStyles from "./style";
import Particles from "react-tsparticles";
import { useGlobalContext } from "../../context";
import { loadFull } from "tsparticles";
import { Box, IconButton, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Countdown from "react-countdown";

const ParticleBackground = () => {
  const classes = useStyles();
  const { dark } = useGlobalContext();
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <>
        <Box className={classes.gridSet}>
          <Box className={classes.gridItem}>
            <Typography variant="h4">{days}</Typography>
          </Box>
          <Typography
            variant="h6"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Days
          </Typography>
        </Box>
        <Box className={classes.gridSet}>
          <Box className={classes.gridItem}>
            <Typography variant="h4">{hours}</Typography>
          </Box>
          <Typography
            variant="h6"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Hours
          </Typography>
        </Box>
        <Box className={classes.gridSet}>
          <Box className={classes.gridItem}>
            <Typography variant="h4">{minutes}</Typography>
          </Box>
          <Typography
            variant="h6"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Minutes
          </Typography>
        </Box>
        <Box className={classes.gridSet}>
          <div className={classes.gridItem}>
            <Typography variant="h4">{seconds}</Typography>
          </div>
          <Typography
            variant="h6"
            style={{ marginTop: "20px", fontWeight: "bold" }}
          >
            Seconds
          </Typography>
        </Box>
      </>
    );
  };
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <section className={classes.header} id="header">
      <Particles
        id="tsparticles"
        style={{ position: "absolute" }}
        init={particlesInit}
        loaded={particlesLoaded}
        canvasClassName="canvas-el"
        options={{
          background: {
            color: {
              value: dark ? "#222" : "#fff",
            },
          },
          height: 1000,
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: dark ? "#fff" : "#222",
            },
            links: {
              color: dark ? "#fff" : "#222",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
          fullScreen: {
            enable: false,
            zIndex: -1,
          },
        }}
      />
      <Box className={classes.midBox}>
        <Box className={classes.leftBox}>
          <Box className={classes.socialIcons}>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <TwitterIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <TelegramIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <EmailIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Box>
          <Typography variant="h4" className={classes.title}>
            Bit Money - Lending & Investment Platform
          </Typography>
          <Box className={classes.btnBox}>
            <button className={classes.leftBtn}>Whitepaper</button>
            <button className={classes.btnRight}>Buy Tokens Now!</button>
          </Box>
        </Box>
        <Box className={classes.rightBox}>
          <Box className={classes.gridCont}>
            <Countdown date={Date.now() + 10000000000} renderer={renderer} />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ParticleBackground;
