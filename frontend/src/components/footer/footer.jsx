import React from "react";
import "./_footer.scss";
import logo from "../../assets/logoRecurso_3@2x.png";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FcPhone } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import {
  FaCcDinersClub,
  FaCcJcb,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  control: {
    background: "black",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt" />
                <div className="cta-text">
                  <Grid
                    className={classes.control}
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                  >
                    <h4>Find us</h4>
                    <span>
                      1010 Medellin, Colombia <FcGlobe size="1.5rem" />
                    </span>
                  </Grid>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone" />
                  <div className="cta-text">
                    <Grid
                      className={classes.control}
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                    >
                      <h4>Call us</h4>
                      <span>
                        9876543210 0 <FcPhone size="1.5rem" />
                      </span>
                    </Grid>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open" />
                  <div className="cta-text">
                    <Grid
                      className={classes.control}
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                    >
                      <h4>Mail us</h4>
                      <span>
                        devchrisar.admin@zohomail.com
                        <FcFeedback size="1.5rem" />
                      </span>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <img src={logo} className="img-fluid" alt="logo" />
                </div>
                <div className="footer-text">
                  <Typography>
                    Hello guys! Welcome to Star Plant, your number one source
                    for all things related to plants. We're dedicated to giving
                    you the very best of us with a focus on quality and
                    real-world problem solution We hope you enjoy our shop as
                    much as We enjoy offering them to you. If you have any
                    questions or comments, please don't hesitate to contact us.
                    Sincerely, star plant.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget"></div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget"></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="new_footer_top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div
                    className="f_widget company_widget wow fadeInLeft"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInLeft",
                    }}
                  >
                    <h3 className="f-title f_600 t_color f_size_18">
                      Get in Touch
                    </h3>
                    <p>Don’t miss any updates!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer_bg"></div>
          </div>
          <div className="footer_bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-7">
                  <Typography className="mb-0 f_400" component="div">
                    © Star⭐Plant Inc.. 2021-2022 All rights reserved.
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      <Grid item xs={5}>
                        <FaCcMastercard size="1.4rem" color="black" />
                        <FaCcPaypal size="1.4rem" color="black" />
                        <FaCcJcb size="1.3rem" color="black" />
                        <FaCcDinersClub size="1.4rem" color="black" />
                      </Grid>
                    </Grid>
                  </Typography>
                  <Typography className="mb-0 f_400" component="div">
                    Hecho con 💖 por Christopher Henry Arias Arcia
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
