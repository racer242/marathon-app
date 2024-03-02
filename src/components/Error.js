import { useContext } from "react";
import { createUseStyles, useTheme } from "react-jss";

import { GlobalsContext } from "../contexts/GlobalsContext";

const SCENE_WIDTH = 880;
const SCENE_HEIGHT = 580;

const useStyles = createUseStyles({
  wrapper: {
    top: 0,
    left: 0,
    position: "absolute",
    width: SCENE_WIDTH,
    height: SCENE_HEIGHT,
    background:
      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.6) 80%, rgba(255,255,255,0) 100%)",
  },

  errorMessage: {
    boxSizing: "border-box",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "54px",
    background: "#C20F2F",
    border: "2px solid #C20F2F",
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

function Error() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { error } = useContext(GlobalsContext);
  return error ? (
    <div className={classes.wrapper}>
      <div className={classes.errorMessage}>{error}</div>
    </div>
  ) : null;
}

export default Error;
