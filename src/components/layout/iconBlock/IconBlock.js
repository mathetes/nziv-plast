import React, { Link } from "react";
import { Card, CardBody, CardLink } from "reactstrap";
import "./IconBlock.scss";
import benefit1 from "../../../images/icons/pack.png";
import benefit2 from "../../../images/icons/build.png";
import benefit3 from "../../../images/icons/transport.png";
import benefit4 from "../../../images/icons/food.png";
import benefit5 from "../../../images/icons/safe.png";
import benefit6 from "../../../images/icons/paint.png";

const IconBlock = props => {
  return (
    <div className="icon__block">
      <Card className="caracter__card">
        <img
          className="icon__block_picture"
          src={benefit1}
          alt="Преимущество №"
        />
        <CardBody className="caracter__card_body">
          <CardLink className="icon__link" href="#">
            Упаковка
          </CardLink>
        </CardBody>
      </Card>

      <Card className="caracter__card">
        <img
          className="icon__block_picture"
          src={benefit2}
          alt="Преимущество №"
        />
        <CardBody className="caracter__card_body">
          <CardLink className="icon__link" href="#">
            Строительная
          </CardLink>
        </CardBody>
      </Card>
      <Card className="caracter__card">
        <img
          className="icon__block_picture"
          src={benefit3}
          alt="Преимущество №"
        />
        <CardBody className="caracter__card_body">
          <CardLink className="icon__link" href="#">
            Транспортировка
          </CardLink>
        </CardBody>
      </Card>
      <Card className="caracter__card">
        <img
          className="icon__block_picture"
          src={benefit4}
          alt="Преимущество №"
        />
        <CardBody className="caracter__card_body">
          <CardLink className="icon__link" href="#">
            Пищевая продукция
          </CardLink>
        </CardBody>
      </Card>
      <Card className="caracter__card">
        <img
          className="icon__block_picture"
          src={benefit5}
          alt="Преимущество №"
        />
        <CardBody className="caracter__card_body">
          <CardLink className="icon__link" href="#">
            Хранение
          </CardLink>
        </CardBody>
      </Card>
      <Card className="caracter__card">
        <img
          className="icon__block_picture"
          src={benefit6}
          alt="Преимущество №"
        />
        <CardBody className="caracter__card_body">
          <CardLink className="icon__link" href="#">
            Лакокрасочная
          </CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default IconBlock;
