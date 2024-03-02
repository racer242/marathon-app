import { createUseStyles, useTheme } from "react-jss";
import Scene from "./Scene";
import Interface from "./Interface";
import Error from "./Error";
import { useContext } from "react";
import { GlobalsContext } from "../contexts/GlobalsContext";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    width: 880,
    height: 580,
  },
});

function Screen() {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { stage } = useContext(GlobalsContext);
  return (
    <div className={classes.wrapper}>
      <Scene />
      <Interface />
      <Error />
    </div>
  );
}

export default Screen;
