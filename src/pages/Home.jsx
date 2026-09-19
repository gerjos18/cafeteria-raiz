import React from "react";

export default function Home({ onNavigate }) {
  return (
    <section id="inicio" className="hero">
      <div>
        <p className="eyebrow">
          Café, sabor y un espacio para compartir
        </p>

        <h1>Bienvenido a Cafetería Raíz</h1>

        <p>
          Consulta nuestro menú, horarios y solicita una
          reservación de manera sencilla.
        </p>

        <p>
          <strong>Horario:</strong> lunes a sábado, 8:00–20:00 h.
        </p>

        <div className="actions">
          <button onClick={() => onNavigate("menu")}>
            Ver menú
          </button>

          <button
            className="secondary"
            onClick={() => onNavigate("reservaciones")}
          >
            Reservar mesa
          </button>
        </div>
      </div>
    </section>
  );
}