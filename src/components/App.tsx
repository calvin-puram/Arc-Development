import React, {useState} from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./ui/Header";
import Theme from "./ui/Theme";
import Footer from './ui/Footer'
import LandingPage from './LandingPage'
import Services from './Services';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} value={value} setValue={setValue}/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/services" component={Services} />
          <Route path="/customsoftware" component={() => <h1>Custom Software</h1>} />
          <Route path="/mobileapps" component={() => <h1>Mobile Apps</h1>} />
          <Route path="/websites" component={() => <h1>Websites</h1>} />
          <Route path="/revolution" component={() => <h1>Revolution</h1>} />
          <Route path="/about" component={() => <h1>About Us</h1>} />
          <Route path="/contact" component={() => <h1>Contact Us</h1>} />
        </Switch>
        <Footer selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} value={value} setValue={setValue}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
