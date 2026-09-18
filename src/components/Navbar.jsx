import React from "react";

export default function Navbar({ onNavigate }) {
  const items = [
    ["inicio", "Inicio"],
    ["menu", "Menú"],
    ["reservaciones", "Reservaciones"],
    ["contacto", "Contacto"]
  ];

  return (
    <header className="header">
      <a
        className="brand"
        href="#inicio"
        onClick={(e) => {
          e.preventDefault();
          onNavigate("inicio");
        }}
      >
        Cafetería Raíz
      </a>

      <nav aria-label="Navegación principal">
        {items.map(([id, label]) => (
          <a
            key={id}
            href={"#" + id}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(id);
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}