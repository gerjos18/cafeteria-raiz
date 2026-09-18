import React from "react";

const products = [
  ["Café", "Café americano", "Café preparado al momento.", "$45"],
  ["Café", "Cappuccino", "Espresso con leche espumada.", "$60"],
  ["Alimentos", "Croissant", "Pieza horneada de mantequilla.", "$55"],
  ["Alimentos", "Sándwich de la casa", "Pan artesanal, vegetales y proteína.", "$95"]
];

export default function Menu() {
  return (
    <section id="menu" className="section">
      <h2>Menú</h2>
      <p>Consulta nuestros productos y precios.</p>

      {["Café", "Alimentos"].map((category) => (
        <div key={category}>
          <h3>{category}</h3>

          <div className="grid">
            {products
              .filter((product) => product[0] === category)
              .map((product) => (
                <article className="card" key={product[1]}>
                  <h4>{product[1]}</h4>
                  <p>{product[2]}</p>
                  <strong>{product[3]}</strong>
                </article>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
}