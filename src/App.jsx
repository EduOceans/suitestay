import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/body/Body";
import Contact from "./components/Contact/contact";
import Rooms from "./components/bookings/rooms";
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import Explore from "./components/Explore/explore"

// import { StyleClass } from 'primereact/styleclass';
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

function App() {
  return (
    <PrimeReactProvider value={{ ripple: true, StyleClass: true }}>
      <Router>
        <div className="app-container">
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Explore" element={<Explore />} />
        </Routes>
        <Footer />
        </div>
      </Router>
      {/* <div>
        <Body />
      </div> */}
    </PrimeReactProvider>
  );
}

export default App;