import { container } from "assets/jss/material-kit-react.jsx";
import typographyStyle from "assets/jss/material-kit-react/components/typographyStyle.jsx";
const zIndex = 50;
const componentsStyle = theme => ({
  container,
  ...typographyStyle,
  root: {
    width: "100%",
    height: "450vh"
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  projectListContainer: {
    zIndex: zIndex + 5,
    backgroundColor: "white",
    width: "100%",
    minHeight: "100vh"
  },
  paperForTable: {
    minWidth: "50%",
    margin: theme.spacing.unit * 3,
    zIndex: zIndex + 5
  },
  yuHeader: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: 0,
    zIndex: zIndex + 5
  },
  flaggyFlagContainer: {
    height: "100vh",
    width: "100%",
    position: "fixed",
    alignItems: "center",
    spacing: "0",
    zIndex: zIndex
  },
  flaggyFlagStrip: {
    height: "100%",
    zIndex: zIndex - 1
  },
  timHeader: {
    zIndex: zIndex + 10
  },
  BGIcontainer: {
    alignItems: "center",
    zIndex: zIndex,
    position: "absolute"
  },
  BGIimg: {
    width: "100%",
    height: "100%"
  },
  BGIimgItem: {
    [theme.breakpoints.up("md")]: {
      width: "40vw",
      height: "auto"
    },
    width: "80vw",
    height: "auto",
    textAlign: "center"
  },
  BGIheader: {
    // color:"linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);",
    // color:
    //   "yellow"
  },
  nailAndGearContainer: {
    // display:"none",
    height: "100vh",
    width: "100%",
    position: "fixed",
    alignItems: "center",
    spacing: "0",
    zIndex: zIndex - 1,
    background: "#555555",
    [theme.breakpoints.up("md")]: {
      padding: "0 10vw",
      height: "100vh"
    }
  },
  nailAndGearItem: {
    justifyContent: "center",
    flexBasis: "auto"
  },
  AVESimg: {
    width: "100%",
    height: "auto"
    // zIndex: zIndex + 4
    // [theme.breakpoints.down("sm")]:{
    //   height:"40vh",
    //   width:"auto"
    // }
  },
  nailAndGear: {
    overflow: "hidden"
    // height: "100%",
    // width:"100%",
  },
  nailAndGearImg: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "30vh",
      width: "auto"
    }
  },
  AVESitem: {
    zIndex: zIndex + 4,
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      width: "100%",
      margin: "auto",
      justifyContent: "center",
      flexBasis: "auto"
    }
  },
  onMoveListener: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: zIndex + 3
  },
  timContainer: {
    zIndex: zIndex + 5
  },
  randomProjectContainer: {
    height: "100vh",
    width: "100%",
    zIndex: zIndex + 4,
    position: "fixed"
  },
  randomProjectImg: {
    width: "25vw",
    position: "absolute",
    height: "auto",
    minWidth: "100px",
    zIndex: zIndex + 4
  },
  topPacman: {
    boxSizing: "content-box",
    textAlign: "center",
    textOverflow: "clip",
    width: "100px",
    height: "50px",
    border: "none",
    color: "#ffff00",
    background: "#ffff00",
    transform: "rotate(-30deg)",
    borderRadius: "50px 50px 0 0"
  },
  bottomPacman: {
    boxSizing: "content-box",
    textAlign: "center",
    textOverflow: "clip",
    width: "100px",
    height: "50px",
    border: "none",
    color: "#ffff00",
    background: "#ffff00",
    transform: "rotate(30deg)",
    borderRadius: "0 0 50px 50px"
  },
  pacmanContainer: {
    position: "absolute",
    // cursor:"pointer",
    zIndex: zIndex + 3
  },
  projectsContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: zIndex + 2,
    alignItems: "center"
  },
  projectsGridContainer: {
    // position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: zIndex + 2,
    alignItems: "center"
  },
  simonBoard: {
    backgroundColor: "#7a43b6",
    width: "100px",
    height: "100px",

    borderRadius: "50%",
    zIndex: zIndex
  },
  simonOuterCircle: {
    backgroundColor: "#7a43b6",
    width: "40px",
    height: "40px",
    position:"absolute",
    borderRadius: "50%",
    zIndex: zIndex + 1
  },
  simonInnerCircle: {
    backgroundColor: "#0f0f0f",
    width: "20px",
    height: "20px",

    borderRadius: "50%",
    zIndex: zIndex + 2
  },
  simonControlBoard: {},
  simonGreen: {
    margin: "0 5px 5px 0",
    marginRight: "5px",
    float: "left",
    // position:"absolute",
    backgroundColor: "green",
    borderTopLeftRadius: "100%",
    width: "35px",
    height: "35px"
  },
  simonRed: {
    margin: "0 0 5px 5px",
    marginLeft: "5px",
    float: "right",
    // position:"absolute",
    backgroundColor: "red",
    borderTopRightRadius: "100%",
    width: "35px",
    height: "35px"
  },
  simonBlue: {
    margin: "5px 0 0 5px",
    float: "right",
    // position:"absolute",
    backgroundColor: "blue",
    borderBottomRightRadius: "100%",
    width: "35px",
    height: "35px"
  },
  simonYellow: {
    margin: "5px 5px 0 0",
    float: "left",
    // position:"absolute",
    backgroundColor: "yellow",
    borderBottomLeftRadius: "100%",
    width: "35px",
    height: "35px"
  },
  simonTopBtn:{
  },
  simonBottomBtn:{
  },
  simonBtn:{
    position:"absolute",
    zIndex:zIndex
  },
  simonControlItem:{
    zIndex:zIndex+2
  },

});

export default componentsStyle;
