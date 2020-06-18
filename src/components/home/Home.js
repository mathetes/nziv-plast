import React from "react";
import IconBlock from "../layout/iconBlock/IconBlock";
import MainSlider from "../layout/mainSlider/MainSlider";
import Caracters from "../layout/caracters/Caracters";
import { Button } from "reactstrap";
import "./Home.scss";

const Home = () => {
  return (
    <section>
      <div className="row">
        <IconBlock />
      </div>
      <h2 className="product__heading">Ведро с ручкой - 5 литров</h2>
      <div className="row">
        <div className="slider__block">
          <MainSlider />
        </div>
        <div className="caracters__block">
          <Caracters />
          <Button color="danger" className="button__order">
            Запросить коммерческое предложение
          </Button>{" "}
        </div>
      </div>
    </section>
  );
};

export default Home;
