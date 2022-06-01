import React from "react";
import useStyles from "./style";
import { useGlobalContext } from "../../context";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import imgBlogOne from "../../images/blog1.jpg";
import author from "../../images/author.jpg";
import comOne from "../../images/c1.png";
import comTwo from "../../images/c2.jpg";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
const BlogMid = () => {
  const { dark } = useGlobalContext();
  const classes = useStyles(dark);
  return (
    <section className={classes.blog}>
      <Container className={classes.bigCont}>
        <Grid container className={classes.gridCont} spacing={2}>
          <Grid item lg={8}>
            <Box className={classes.blogItem}>
              <img src={imgBlogOne} alt="" className={classes.img} />
              <Box className={classes.dateBox}>
                <Typography variant="h6" className={classes.date}>
                  30
                </Typography>
                <Typography
                  variant="h6"
                  component="span"
                  className={classes.dateSpan}
                >
                  June
                </Typography>
              </Box>
              <Container className={classes.smCont}>
                <Typography variant="body1" className={classes.text}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aperiam consectetur cumque dolorum, ex incidunt ipsa
                  laudantium necessitatibus neque quae tempora.Lorem ipsum dolor
                  sit amet, consectetur adipisicing elit. Aperiam consectetur
                  cumque dolorum, ex incidunt ipsa laudantium necessitatibus
                  neque quae tempora.Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Aperiam consectetur cumque dolorum, ex
                  incidunt ipsa laudantium necessitatibus neque quae tempora.
                </Typography>
              </Container>
            </Box>

            {/* Main Author */}

            <Box className={classes.author}>
              <Typography variant="h5">About he author</Typography>
              <div className={classes.underlineBig}></div>
              <Box className={classes.authorBox}>
                <Box className={classes.leftBox}>
                  <img src={author} alt="author1" className={classes.imgAut} />
                </Box>
                <Box className={classes.rightBox}>
                  <Typography className={classes.authTitle}>
                    SYED EKRAM
                  </Typography>
                  <Typography variant="body1" className={classes.authBod}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci. Duis dapibus urna purus, eget facilisis nisi tincidunt
                    semper. Integer non dolor egestas, finibus neque sit amet,
                    venenatis risus.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* comments */}

            <Box className={classes.author}>
              <Typography variant="h5">Comments</Typography>
              <div className={classes.underlineBig}></div>
              <Box className={classes.authorBox}>
                <Box className={classes.leftBox}>
                  <img src={comOne} alt="author1" className={classes.imgAut} />
                </Box>
                <Box className={classes.rightBox}>
                  <Typography className={classes.authTitle}>
                    MASUM BILLAH
                  </Typography>
                  <Typography variant="body1" className={classes.authBod}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci. Duis dapibus urna purus, eget facilisis nisi tincidunt
                    semper. Integer non dolor egestas, finibus neque sit amet,
                    venenatis risus.
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.authorBox} style={{ marginTop: 30 }}>
                <Box className={classes.leftBox}>
                  <img src={comTwo} alt="author1" className={classes.imgAut} />
                </Box>
                <Box className={classes.rightBox}>
                  <Typography className={classes.authTitle}>
                    SAHRIM SHEILA
                  </Typography>
                  <Typography variant="body1" className={classes.authBod}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent ultricies quam nisi, vel gravida enim accumsan id.
                    Praesent justo quam, auctor et lorem in, pulvinar ornare
                    orci. Duis dapibus urna purus, eget facilisis nisi tincidunt
                    semper. Integer non dolor egestas, finibus neque sit amet,
                    venenatis risus.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/*Form*/}

            <Box className={classes.addComment} style={{ marginTop: 80 }}>
              <Typography variant="h5">Add Comment</Typography>
              <div className={classes.underlineBig}></div>
              <Box className={classes.spreadBox}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className={classes.inputF}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  className={classes.inputF}
                />
              </Box>
              <TextField
                label="Your Comment"
                multiline
                minRows={8}
                maxRows={8}
                variant="outlined"
                className={classes.multiline}
              />
              <Button type="submit" className={classes.subBtn}>
                Submit
              </Button>
            </Box>
          </Grid>
          <Grid item lg={4}>
            {/* Search */}

            <Box className={classes.searchBox}>
              <TextField
                variant="outlined"
                label="Search..."
                className={classes.field}
              />
            </Box>

            {/* Topics */}

            <Box className={classes.mostRead}>
              <Container className={classes.readCont}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", marginTop: 30 }}
                >
                  MOST READ
                </Typography>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      lineHeight: 1.8,
                    }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      lineHeight: 1.8,
                    }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      lineHeight: 1.8,
                    }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
                <Link
                  href="#"
                  style={{ textDecoration: "none" }}
                  className={classes.linkIpsum}
                >
                  <Typography
                    variant="body1"
                    style={{
                      marginTop: 20,
                      marginBottom: 20,
                      lineHeight: 1.8,
                    }}
                  >
                    Lorem ipsum dolor sit amet,consectetur adipiscijng
                    elit.Fusce vitae risus nec dui venenatis dignissim.
                  </Typography>
                </Link>
                <div className={classes.underline}></div>
              </Container>
            </Box>
            {/* Categorys */}

            <Box className={classes.mostRead}>
              <Container className={classes.readCont}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", marginTop: 30 }}
                >
                  CATEGORIES
                </Typography>
                <div className={classes.underline}></div>
                <Box className={classes.categories}>
                  <Typography variant="body1" className={classes.cates}>
                    Bitcoin
                  </Typography>
                  <Typography variant="body1" className={classes.cates}>
                    Business
                  </Typography>
                  <Typography variant="body1" className={classes.cates}>
                    Crypto Currency
                  </Typography>
                  <Typography variant="body1" className={classes.cates}>
                    Isomeric Bitcoin
                  </Typography>
                  <Typography variant="body1" className={classes.cates}>
                    Ico Coin
                  </Typography>
                  <Typography variant="body1" className={classes.cates}>
                    Crypto King
                  </Typography>
                </Box>
              </Container>
            </Box>

            {/* Upcoming Event */}

            <Box className={classes.mostRead}>
              <Container className={classes.readCont}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", marginTop: 30 }}
                >
                  UPCOMING EVENTS
                </Typography>
                <div className={classes.underline}></div>
                <Box className={classes.event}>
                  <Link
                    href="#"
                    variant="subtitle1"
                    style={{ textDecoration: "none" }}
                    className={classes.linkIpsum}
                  >
                    Lorem ipsum dolor sit amet.
                  </Link>
                  <Box className={classes.dateEve}>
                    <AccessTimeIcon />
                    <Typography variant="body1" style={{ marginLeft: 10 }}>
                      June 26 - July 30
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.event}>
                  <Link
                    href="#"
                    variant="subtitle1"
                    style={{ textDecoration: "none" }}
                    className={classes.linkIpsum}
                  >
                    Lorem ipsum dolor sit amet.
                  </Link>
                  <Box className={classes.dateEve}>
                    <AccessTimeIcon />
                    <Typography variant="body1" style={{ marginLeft: 10 }}>
                      June 26 - July 30
                    </Typography>
                  </Box>
                </Box>
              </Container>
            </Box>

            {/* Video Widget */}
            <Box className={classes.mostRead}>
              <Container className={classes.readCont}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", marginTop: 30 }}
                >
                  VIDEO WIDGET
                </Typography>
                <div className={classes.underline}></div>
                <iframe
                  width="90%"
                  height="200"
                  src={`https://www.youtube-nocookie.com/embed/oMX1sc3eOTE`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                  className={classes.frame}
                />
              </Container>
            </Box>

            {/* Video Widget */}

            <Box className={classes.mostRead}>
              <Container className={classes.readCont}>
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", marginTop: 30 }}
                >
                  TAG CLOUDE
                </Typography>
                <div className={classes.underline}></div>
                <Box className={classes.tagBtnBox}>
                  <Button className={classes.tagBtn}>Design</Button>
                  <Button className={classes.tagBtn}>Development</Button>
                  <Button className={classes.tagBtn}>seo</Button>
                  <Button className={classes.tagBtn}>responsive</Button>
                  <Button className={classes.tagBtn}>bitcoin</Button>
                  <Button className={classes.tagBtn}>ico coin</Button>
                  <Button className={classes.tagBtn}>crypto</Button>
                  <Button className={classes.tagBtn}>kaniz</Button>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default BlogMid;
