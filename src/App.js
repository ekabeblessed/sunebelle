import React, { Fragment } from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Theme from "./utils/theme/Theme";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/about" component={AboutScreen} />
            <Route exact path="/contact" component={ContactScreen} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};
export default App;
