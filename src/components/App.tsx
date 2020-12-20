import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./ui/Header";
import Theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route path="/services" component={() => <h1>Services</h1>} />
          <Route path="/revolution" component={() => <h1>Revolution</h1>} />
          <Route path="/about" component={() => <h1>About Us</h1>} />
          <Route path="/contact" component={() => <h1>Contact Us</h1>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
