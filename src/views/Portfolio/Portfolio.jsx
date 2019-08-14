import React, { useState, useEffect, useCallback, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import LazyLoad from "react-lazyload";

// @material-ui/icons
// core components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// sections for this page
import {
  useSpring,
  animated,
  useTrail,
  useChain,
  useTransition,
  config
} from "react-spring";
import { throttle } from "lodash";
import portfolioStyle from "assets/jss/material-kit-react/views/portfolio";
function Projects({
  windowHeight,
  windowWidth,
  classes,
  projectOpacitySpring
}) {
  const interp = i => r =>
    `translate3d(0, ${150 * Math.sin(r + (i * 2 * Math.PI) / 4)}px, 0)`;
  const [radianReset, setRadianReset] = useState(true);
  const { radians } = useSpring({
    to: { radians: radianReset ? 2 * Math.PI : 0 },
    from: { radians: 0 },
    config: { duration: 3500 },
    onRest: () => {
      setRadianReset(radianReset => !radianReset);
    }
  });
  return (
    <animated.div
      style={projectOpacitySpring}
      className={classes.projectsContainer}
    >
      <Grid
        container
        className={classes.projectsGridContainer}
        alignItems={"center"}
        justify={"center"}
        spacing={24}
      >
        <Grid item>
          <animated.div style={{ transform: radians.interpolate(interp(1)) }}>
            <animated.a
              href={
                "https://codepen.io/please_check_your_network_connection/full/KrOxJJ"
              }
            >
              <Grid
                container
                className={classes.simonBoard}
                alignItems={"center"}
                justify={"center"}
              >
                <Grid item className={classes.simonControlItem}>
                  <div className={classes.simonInnerCircle} />
                </Grid>
                <div className={classes.simonOuterCircle} />
                <div className={classes.simonBtn}>
                  <div className={classes.simonTopBtn}>
                    <div className={classes.simonGreen} />
                    <div className={classes.simonRed} />
                  </div>
                  <div className={classes.simonBottomBtn}>
                    <div className={classes.simonYellow} />
                    <div className={classes.simonBlue} />
                  </div>
                </div>
              </Grid>
            </animated.a>
          </animated.div>
        </Grid>
        <Grid item>
          <LazyLoad height={100} once={true}>
            <a
              href={
                "https://codepen.io/please_check_your_network_connection/full/WxVEzg"
              }
            >
              <animated.img
                style={{
                  width: "100px",
                  height: "auto",
                  transform: radians.interpolate(interp(3))
                }}
                src={
                  "https://res.cloudinary.com/dfxanglyc/image/upload/v1553037938/portfolio/Screenshot_from_2019-03-19_16-18-57.png"
                }
              />
            </a>
          </LazyLoad>
        </Grid>
        <Grid item>
          <LazyLoad height={100} once={true}>
            <a
              href={
                "https://codepen.io/please_check_your_network_connection/full/kXOLyb"
              }
            >
              <animated.img
                style={{
                  width: "100px",
                  height: "auto",
                  transform: radians.interpolate(interp(1))
                }}
                src={
                  "https://res.cloudinary.com/dfxanglyc/image/upload/v1553037966/portfolio/Screenshot_from_2019-03-19_16-25-58.png"
                }
              />
            </a>
          </LazyLoad>
        </Grid>
      </Grid>
    </animated.div>
  );
}
function Pacman({ windowHeight, windowWidth, classes, projectOpacitySpring }) {
  const [pacmanOpen, setPacmanOpen] = useState(true);
  const pacmanOpenAngle = useSpring({
    config: { duration: 500 },
    from: { angle: 30 },
    to: { angle: pacmanOpen ? 0 : 30 },

    onRest: () => {
      setPacmanOpen(!pacmanOpen);
    }
  });
  const [moveRight, setMoveRight] = useState(true);
  const [moveUp, setMoveUp] = useState(true);
  const velocity = 300 / 1000;
  const pacmanHorizontalSpring = useSpring({
    config: { duration: windowWidth / velocity },
    from: { transform: `translate3d(0px, 0px, 0)` },
    to: {
      transform: `translate3d(${moveRight ? windowWidth - 100 : 0}px, 0px, 0)`
    },

    onRest: () => {
      if (moveUp === moveRight) {
        // console.log("moveRight");
        setMoveUp(!moveUp);
      }
    }
  });
  const pacmanVerticleSpring = useSpring({
    config: { duration: windowHeight / velocity },
    from: { transform: `translate3d(0px, 0px, 0)` },
    to: {
      transform: `translate3d(0px,  ${moveUp ? 0 : windowHeight - 100}px, 0)`
    },

    onRest: () => {
      if (moveUp !== moveRight) {
        // console.log("moveup");
        setMoveRight(!moveRight);
      }
    }
  });
  const [pacmanAngle, setPacmanAngle] = useState(0);
  useEffect(() => {
    if (moveUp === true && moveRight === true) setPacmanAngle(0);
    else if (moveUp === false && moveRight === true) setPacmanAngle(90);
    else if (moveUp === false && moveRight === false) setPacmanAngle(180);
    else if (moveUp === true && moveRight === false) setPacmanAngle(270);
  }, [moveRight, moveUp]);
  return (
    <animated.div
      style={{ ...projectOpacitySpring }}
      className={classes.pacmanContainer}
    >
      <animated.div style={pacmanVerticleSpring} className="logo">
        <animated.div style={pacmanHorizontalSpring} className="SMCCPC">
          <div style={{ transform: `rotate(${pacmanAngle}deg)` }}>
            <a
              href={
                "https://jimmyrowland.github.io/practice_react_apps/pacmanBuild/"
              }
            >
              <animated.div
                style={{
                  transform: pacmanOpenAngle.angle.interpolate(
                    angle => `rotate(${-angle}deg)`
                  )
                }}
                className={classes.topPacman}
              />
              <animated.div
                style={{
                  transform: pacmanOpenAngle.angle.interpolate(
                    angle => `rotate(${angle}deg)`
                  )
                }}
                className={classes.bottomPacman}
              />
            </a>
          </div>
        </animated.div>
      </animated.div>
    </animated.div>
  );
}

function GradeDisctribution({
  windowHeight,
  windowWidth,
  classes,
  projectDisplayToggle,
  projectOpacitySpring
}) {
  const imgRef = useRef();
  const [{ imgWidth, imgHeight }, setImgDimension] = useState({
    imgWidth: 100,
    imgHeight: 100
  });
  useEffect(() => {
    setImgDimension({
      imgHeight: imgRef.current.getBoundingClientRect().height,
      imgWidth: imgRef.current.getBoundingClientRect().width
    });
  }, [windowWidth, windowHeight, projectDisplayToggle]);
  const [{ moveUp, moveRight }, setMovingDir] = useState({
    moveUp: false,
    moveRight: true
  });
  const velocity = 200 / 1000;
  const [toggle, settoggle] = useState(true);
  const imgSpring = useSpring({
    config: { duration: windowWidth / velocity },
    // duration: windowWidth / velocity,
    from: { transform: `translate3d(0px, 0px, 0)` },

    to: {
      transform: `translate3d(${
        moveRight ? windowWidth - imgWidth : 0
      }px, 0px, 0)`
    },
    onRest: () => {
      setMovingDir(dirState => ({
        moveRight: !dirState.moveRight,
        moveUp: dirState.moveUp
      }));
    }
  });
  const containerSpring = useSpring({
    config: { duration: windowHeight / velocity },
    from: { transform: `translate3d(0px, 0px, 0)` },
    to: {
      transform: `translate3d(0px, ${
        moveUp ? 0 : windowHeight - imgHeight
      }px, 0)`
    },
    onRest: () => {
      setMovingDir(dirState => ({
        moveUp: !dirState.moveUp,
        moveRight: dirState.moveRight
      }));
    }
  });

  return (
    <animated.div
      style={{ ...containerSpring, ...projectOpacitySpring }}
      className={classes.randomProjectImg}
    >
      <a href={"https://jimmyrowland.github.io/smc_course_list/classlist/"}>
        <animated.img
          style={{ ...imgSpring }}
          ref={imgRef}
          className={classes.randomProjectImg}
          src="https://res.cloudinary.com/dfxanglyc/image/upload/v1557949220/portfolio/Screenshot-from-2019-03-18-16-14-41-compressor.png"
        />
      </a>
    </animated.div>
  );
}
function Portfolio({ classes, ...rest }) {
  // Rainbow Title
  // const BGItitle="My first <a href={\"http://vulcanjs.org/\"}>VulcanJS</a> project built with <a href={\"https://material-ui.com/\"}>material-ui</a>"
  const BGItitle = "My first VulcanJS project built with material-ui";
  const timTitle = "As a Tim, I proudly present:";
  const randomProjectTitle = "Graveyard";
  const titleLen = BGItitle.length;
  const phaseJump = 360 / titleLen;

  const AVEStitle = "A blog built with django zinnia and HTML5 UP theme";

  const [
    initScrollTopWindowWidthToggle,
    setInitScrollTopWindowWidthToggle
  ] = useState(false);

  const nailItemRef = useRef();
  const [nailRotationAngel, setNailRotationAngle] = useSpring(() => ({
    angle: -45
  }));
  const [{ nailCenterX, nailCenterY }, setNailCenter] = useState({
    nailCenterX: 0,
    nailCenterY: 0
  });

  useEffect(() => {
    setNailCenter({
      nailCenterX:
        (nailItemRef.current.getBoundingClientRect().left +
          nailItemRef.current.getBoundingClientRect().right) /
        2,
      nailCenterY:
        (nailItemRef.current.getBoundingClientRect().top +
          nailItemRef.current.getBoundingClientRect().bottom) /
        2
    });
  }, [initScrollTopWindowWidthToggle]);
  const throttledAngle = useRef(
    throttle(gearAngle => {
      if (gearAngle)
        setNailRotationAngle({ angle: gearAngle, config: config.molasses });
      // console.log(gearAngle,nailRotationAngel.angle.interpolate(angle=>angle));
    }, 500)
  );
  const nailOnMove = useCallback(({ clientX: x, clientY: y }) => {
    if (throttledAngle.current && x && y) {
      throttledAngle.current(
        (Math.atan2(y - nailCenterY, x - nailCenterX) * 180) / Math.PI - 45
      );
    }

    // console.log(x,nailCenterX,y,nailCenterY,nailItemRef.current.getBoundingClientRect(),(Math.atan2((y - nailCenterY) , (x - nailCenterX)) )* 180 / Math.PI,y - nailCenterY,x - nailCenterX,Math.atan2((y - nailCenterY) , (x - nailCenterX)));
  });
  const splitAVEStitle = AVEStitle.split("").map((char, i) => {
    return (
      <animated.span
        key={i}
        style={{
          color: nailRotationAngel.angle.interpolate(
            angle => `hsl(${angle + Math.floor(i * phaseJump)},55%, 70%)`
          )
        }}
      >
        {char}
      </animated.span>
    );
  });

  const nailAndGear = useRef();

  useEffect(() => {
    throttledAngle.current(
      (Math.atan2(
        nailItemRef.current.clientY - nailCenterY,
        nailItemRef.current.clientX - nailCenterX
      ) *
        180) /
        Math.PI -
        45
    );
  }, []);

  const [scrollTop, setScrollTop] = useState(0);
  const [{ windowWidth, windowHeight }, setWindowSize] = useState({
    windowWidth: 500,
    windowHeight: 500
  });
  const handleScroll = throttle(() => {
    setScrollTop(window.pageYOffset);
  }, 200);
  const handleResize = throttle(() => {
    setScrollTop(window.pageYOffset);
    setWindowSize({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
    setNailCenter({
      nailCenterX:
        (nailItemRef.current.getBoundingClientRect().left +
          nailItemRef.current.getBoundingClientRect().right) /
        2,
      nailCenterY:
        (nailItemRef.current.getBoundingClientRect().top +
          nailItemRef.current.getBoundingClientRect().bottom) /
        2
    });
  }, 500);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    if (window && !initScrollTopWindowWidthToggle) {
      setScrollTop(window.pageYOffset);
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      });
      setInitScrollTopWindowWidthToggle(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [initScrollTopWindowWidthToggle]);

  // BGI title animation
  const angle = useSpring({
    config: config.slow,
    from: { angle: 0 },
    to: { angle: (scrollTop / windowHeight) * 360 }
  });
  const splitBGItitle = BGItitle.split("").map((char, i) => {
    return (
      <animated.span
        key={i}
        style={{
          color: angle.angle.interpolate(
            angle => `hsl(${angle + Math.floor(i * phaseJump)}, 55%, 70%)`
          )
        }}
      >
        {char}
      </animated.span>
    );
  });
  const splitTimTitle = timTitle.split("").map((char, i) => {
    return (
      <animated.span
        key={i}
        style={{
          color: angle.angle.interpolate(
            angle => `hsl(${angle + Math.floor(i * phaseJump)}, 55%, 70%)`
          )
        }}
      >
        {char}
      </animated.span>
    );
  });
  const splitRandomProjectTitle = randomProjectTitle
    .split("")
    .map((char, i) => {
      return (
        <animated.span
          key={i}
          style={{
            color: angle.angle.interpolate(
              angle => `hsl(${angle + Math.floor(i * phaseJump)}, 55%, 70%)`
            )
          }}
        >
          {char}
        </animated.span>
      );
    });
  const [flaggyflagdisplayToggle, setFlaggyflagdisplayToggle] = useState(false);
  const [flaggyflagAnimationToggle, setFlaggyflagAnimationToggle] = useState(
    false
  );
  const [
    flaggyflagContentDisplayToggle,
    setflaggyflagContentDisplayToggle
  ] = useState(true);
  const [nailAndGearDisplayToggle, setnailAndGearDisplayToggle] = useState(
    false
  );
  const [projectAnimateToggle, setPeojectAnimateToggle] = useState(false);
  const [projectDisplayToggle, setProjectDisplayToggle] = useState(false);
  useEffect(() => {
    if (scrollTop > windowHeight + 2 && scrollTop < windowHeight * 2) {
      setFlaggyflagdisplayToggle(true);
      setFlaggyflagAnimationToggle(true);
      setPeojectAnimateToggle(false);
      setProjectDisplayToggle(false);
      setflaggyflagContentDisplayToggle(true);
    } else if (scrollTop < windowHeight + 2) {
      setFlaggyflagAnimationToggle(false);
      setnailAndGearDisplayToggle(false);
      // setflaggyflagContentDisplayToggle(true);
      setPeojectAnimateToggle(false);
      setProjectDisplayToggle(false);
    } else if (scrollTop > windowHeight * 2 && scrollTop < windowHeight * 3) {
      setFlaggyflagAnimationToggle(false);
      setnailAndGearDisplayToggle(true);
      setPeojectAnimateToggle(false);
    } else if (scrollTop > windowHeight * 3) {
      setFlaggyflagdisplayToggle(true);
      setFlaggyflagAnimationToggle(true);
      setnailAndGearDisplayToggle(true);
      setflaggyflagContentDisplayToggle(false);
      setPeojectAnimateToggle(true);
      setProjectDisplayToggle(true);
    }
  }, [scrollTop, windowHeight]);
  const flaggyflagAnimationRef = useRef();
  const flaggyflagContentAnimationRef = useRef();
  const flagTrails = useTrail(3, {
    ref: flaggyflagAnimationRef,
    config: config.slow,
    to: {
      transform: `translate3d(0,${
        flaggyflagAnimationToggle ? 0 : 1.2 * windowHeight
      }px,0)`,
      opacity: flaggyflagAnimationToggle ? 1 : 0
    },
    from: {
      transform: `translate3d(0,${2 * windowHeight}px,0)`,
      opacity: 0
    },
    onRest: () => {
      if (flaggyflagdisplayToggle && !flaggyflagAnimationToggle)
        setFlaggyflagdisplayToggle(false);
      if (flaggyflagContentDisplayToggle && !flaggyflagAnimationToggle)
        setflaggyflagContentDisplayToggle(false);
    }
  });
  const projectOpacitySpring = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: projectAnimateToggle ? 1 : 0 },
    onRest: () => {
      if (projectDisplayToggle && !projectAnimateToggle)
        setProjectDisplayToggle(false);
    }
  });
  const flaggyflagContentOpacitySpring = useSpring({
    ref: flaggyflagContentAnimationRef,
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: flaggyflagAnimationToggle ? 1 : 0 }
  });
  useEffect(() => {
    setNailCenter({
      nailCenterX:
        (nailItemRef.current.getBoundingClientRect().left +
          nailItemRef.current.getBoundingClientRect().right) /
        2,
      nailCenterY:
        (nailItemRef.current.getBoundingClientRect().top +
          nailItemRef.current.getBoundingClientRect().bottom) /
        2
    });
  }, [nailAndGearDisplayToggle]);

  useChain(
    flaggyflagAnimationToggle
      ? [flaggyflagAnimationRef, flaggyflagContentAnimationRef]
      : [flaggyflagContentAnimationRef, flaggyflagAnimationRef],
    [0, 1]
  );
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.flaggyFlagContainer}
        style={{ display: flaggyflagdisplayToggle ? "flex" : "none" }}
      >
        <Grid item xs={3} className={classes.flaggyFlagStrip}>
          <animated.div
            style={{
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              ...flagTrails[0]
            }}
          />
        </Grid>
        <Grid item xs={3} className={classes.flaggyFlagStrip}>
          <animated.div
            style={{
              backgroundColor: "white",
              width: "100%",
              height: "100%",
              ...flagTrails[1]
            }}
          />
        </Grid>
        <Grid item xs={6} className={classes.flaggyFlagStrip}>
          <animated.div
            style={{
              backgroundColor: "grey",
              width: "100%",
              height: "100%",
              ...flagTrails[2]
            }}
          />
        </Grid>
        <Grid container justify={"center"} className={classes.BGIcontainer}>
          <Grid item className={classes.BGIimgItem}>
            <animated.h3
              style={{
                display: flaggyflagContentDisplayToggle ? "inline" : "none",
                opacity: flaggyflagContentOpacitySpring.opacity
              }}
              className={classes.BGIheader}
            >
              {splitBGItitle}
            </animated.h3>
            <a
              style={{
                display: flaggyflagContentDisplayToggle ? "flex" : "none"
              }}
              href={"http://95.169.27.185/"}
            >
              <animated.img
                alt={"Gallery App"}
                src={
                  "https://res.cloudinary.com/dfxanglyc/image/upload/v1557949220/portfolio/Screenshot-from-2019-03-16-13-32-47-compressor.png"
                }
                className={classes.BGIimg}
                style={{ opacity: flaggyflagContentOpacitySpring.opacity }}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.nailAndGearContainer}
        justify={"center"}
        style={{ display: nailAndGearDisplayToggle ? "flex" : "none" }}
      >
        <div className={classes.onMoveListener} onMouseMove={nailOnMove} />
        <Grid item sm={12} md={5} className={classes.nailAndGearItem}>
          {/*<p>{}</p>*/}

          <animated.img
            ref={nailItemRef}
            style={{
              transform: nailRotationAngel.angle.interpolate(
                angle => `rotate(${angle}deg)`
              )
            }}
            className={classes.nailAndGearImg}
            alt={"The proper use of nail and gear"}
            src={
              "https://res.cloudinary.com/dfxanglyc/image/upload/v1552774058/portfolio/1024px-Nail___Gear.svg.png"
            }
          />
        </Grid>
        <Grid item sm={12} md={7} className={classes.AVESitem}>
          <animated.h3>
            {splitAVEStitle}
            {/*{nailRotationAngel.angle.interpolate(angle=>angle)}*/}
          </animated.h3>
          <LazyLoad height={200} once={true}>
            <a
              onMouseMove={nailOnMove}
              href={"http://111.221.44.154:21414/"}
              style={{ margin: "auto", padding: "auto", width: "auto" }}
            >
              <img
                alt={"blog"}
                src={
                  "https://res.cloudinary.com/dfxanglyc/image/upload/v1557949220/portfolio/Screenshot-from-2019-03-16-14-55-49-compressor.png"
                }
                className={classes.AVESimg}
              />
            </a>
          </LazyLoad>
        </Grid>
      </Grid>

      <Grid
        container
        className={classes.randomProjectContainer}
        style={{ display: projectDisplayToggle ? "flex" : "none" }}
      >
        <animated.h1 style={projectOpacitySpring}>
          {splitRandomProjectTitle}
        </animated.h1>
        <GradeDisctribution
          projectDisplayToggle={projectAnimateToggle}
          classes={classes}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          projectOpacitySpring={projectOpacitySpring}
        />
        <Pacman
          classes={classes}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          projectOpacitySpring={projectOpacitySpring}
        />
        <Projects
          classes={classes}
          windowHeight={windowHeight}
          windowWidth={windowWidth}
          projectOpacitySpring={projectOpacitySpring}
        />
      </Grid>

      <Grid container className={classes.projectListContainer}>
        <div className={classes.projectListContainer}>
          <Header
            brand="Yu's Portfolio"
            rightLinks={<HeaderLinks />}
            color="dark"
          />

          <Paper className={classes.paperForTable}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Projects</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a href={"http://111.221.44.154:21414"}>
                      Django blog with blog app zinnia template from HTML5 UP
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a href={"http://95.169.27.185/"}>
                      Gallery app built with VulcanJS and material-ui
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://jimmyrowland.github.io/practice_react_apps/pacmanBuild/"
                      }
                    >
                      Pac-man
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://jimmyrowland.github.io/practice_react_apps/markdownInit/"
                      }
                    >
                      Freecodecamp markdown
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://jimmyrowland.github.io/smc_course_list/classlist/"
                      }
                    >
                      SMC Class List With Grade Distribution
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://codepen.io/please_check_your_network_connection/full/kXOLyb"
                      }
                    >
                      Freecodecamp calculator
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://codepen.io/please_check_your_network_connection/full/KrOxJJ"
                      }
                    >
                      Simon Game
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://codepen.io/please_check_your_network_connection/full/grVazA"
                      }
                    >
                      Tic Tac Toe Game
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://codepen.io/please_check_your_network_connection/full/WxVEzg"
                      }
                    >
                      Timer
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://codepen.io/please_check_your_network_connection/full/NAVqop"
                      }
                    >
                      TWITCH STREAMERS
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://codepen.io/please_check_your_network_connection/full/grymdE"
                      }
                    >
                      Wikisearch
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a
                      href={
                        "https://codepen.io/please_check_your_network_connection/pen/BzrwXA"
                      }
                    >
                      Random Quotes
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    <a href={"https://jimmyfreecodecamp.glitch.me/"}>
                      Freecodecamp express challenge
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </div>
      </Grid>
      <Grid container className={classes.timContainer}>
        {" "}
        <h2 className={classes.timHeader}>{splitTimTitle}</h2>
      </Grid>
    </div>
  );
}

const theme = createMuiTheme({ typography: { useNextVariants: true } });
function ThemeHelper(props) {
  const { classes, children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Portfolio classes={classes}>{children}</Portfolio>
    </ThemeProvider>
  );
}
export default withStyles(portfolioStyle)(ThemeHelper);
