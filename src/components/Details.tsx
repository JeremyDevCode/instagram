import React from "react";

function Details() {
  return (
    <section className="flex flex-col items-start justify-center w-full text-[#404040] p-5 text-sm pb-10 pt-0">
      <span className="font-semibold">GreenDeal</span>
      <div>Servicios medioambientales</div>
      <h1>
        Proyectos de innovación circular ♻️ <br />
        El plástico desechado, nuestra nueva materia prima <br />
        Productos y servicios circulares 🌎
      </h1>
      <a href="https://greendeal.pe" className="text-[#5b7b9c]" target="_blank">
        greendeal.pe
      </a>
    </section>
  );
}

export { Details };
