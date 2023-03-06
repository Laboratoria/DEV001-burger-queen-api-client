import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
const Home = () => {
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const todayDate = new Date();

  return (
    <>
      <Header />
      <section className="contenedor-fecha">
        <p className="fecha">
          {`${diasSemana[todayDate.getDay()]},${todayDate.getDate()} de ${
            meses[todayDate.getMonth()]
          } del ${todayDate.getFullYear()}`}
        </p>
      </section>
      <section className="fondo">
        <p>¡Cada día es un nuevo comenzar!</p>
        <p>«Lo que haces hoy puede mejorar todos tus mañanas»</p>
      </section>
    </>
  );
};

export default Home;
