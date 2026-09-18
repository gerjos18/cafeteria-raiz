import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import ReservationForm from "./components/ReservationForm";
import Contact from "./components/Contact";

export default function App() {
  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <>
      <Navbar onNavigate={goTo} />

      <main>
        <Home onNavigate={goTo} />
        <Menu />
        <ReservationForm />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Cafetería Raíz</p>
      </footer>
    </>
  );
}