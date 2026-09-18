import React from "react";

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <h2>Contacto y ubicación</h2>

      <div className="contact-grid">
        <div>
          <h3>Visítanos</h3>

          <p>
            Av. Principal #123, Colima, Colima.
          </p>

          <p>
            <strong>Horario:</strong> lunes a sábado,
            8:00–20:00 h.
          </p>
        </div>

        <div>
          <h3>Contacto</h3>

          <p>
            <a href="tel:+523121234567">
              312 123 4567
            </a>
          </p>

          <p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noreferrer"
            >
              Ver ubicación en mapa
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}