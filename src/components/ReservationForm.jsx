import React, { useState } from "react";

export default function ReservationForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    if (
      !data.get("nombre") ||
      !data.get("fecha") ||
      !data.get("hora") ||
      !data.get("personas")
    ) {
      setError("Completa todos los campos obligatorios.");
      return;
    }

    setError("");
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id="reservaciones" className="section alt">
      <h2>Reservaciones</h2>

      <p>Envía una solicitud de mesa.</p>

      <form onSubmit={submit}>
        <label>
          Nombre*
          <input name="nombre" required />
        </label>

        <label>
          Fecha*
          <input name="fecha" type="date" required />
        </label>

        <label>
          Hora*
          <input name="hora" type="time" required />
        </label>

        <label>
          Número de personas*
          <input
            name="personas"
            type="number"
            min="1"
            max="12"
            required
          />
        </label>

        <button type="submit">
          Enviar solicitud
        </button>

        {error && (
          <p className="error" role="alert">
            {error}
          </p>
        )}

        {sent && (
          <p className="success" role="status">
            Solicitud enviada correctamente.
          </p>
        )}
      </form>
    </section>
  );
}