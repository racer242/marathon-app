import { ThemeProvider } from "react-jss";
import Screen from "./components/Screen";
import { GlobalsProvider } from "./contexts/GlobalsContext";
import DataManager from "./components/DataManager";
import { MediaPreloader } from "./components/MediaPreloader";

const theme = {
  background: "#FFFFFF",
  color: "#000000",
};

function App({ root }) {
  return (
    <GlobalsProvider data={{}} root={root}>
      <MediaPreloader>
        <DataManager root={root} />
        <ThemeProvider theme={theme}>
          <Screen />
        </ThemeProvider>
      </MediaPreloader>
    </GlobalsProvider>
  );
}

export default App;
