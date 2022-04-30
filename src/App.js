import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";

import "./App.css";

// move to footer?
const contact = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => {
  return (
    <>
      <div className="App">
        <Header />
        <Cards />
        <Footer contacts={contact} />
      </div>
    </>
  );
};

export default App;
