import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Table
} from "reactstrap";
import "./Caracters.scss";

const Caracters = props => {
  return (
    <div>
      <Card>
        <CardBody className="caracters__heading">
          <CardTitle>
            <h2 className="heading__h2">Характеристики изделия:</h2>
          </CardTitle>
        </CardBody>
      </Card>
      <Table
        striped
        className="caracters__table table"
        cellSpacing="0"
        cellPadding="0"
      >
        <tbody>
          <tr>
            <td width="221">Материал</td>
            <td width="64">ПП</td>
          </tr>
          <tr>
            <td>Масса, кг</td>
            <td align="right">0,0225</td>
          </tr>
          <tr>
            <td>Диаметр горловины Дг, мм</td>
            <td align="right">122,3</td>
          </tr>
          <tr>
            <td>Высота Н, мм</td>
            <td align="right">55,2</td>
          </tr>
          <tr>
            <td>Диаметр дна Дд, мм</td>
            <td align="right">109</td>
          </tr>
          <tr>
            <td>Вид упаковки</td>
            <td>гофротара</td>
          </tr>
          <tr>
            <td>Кол-во в упаковке, шт.</td>
            <td align="right">300</td>
          </tr>
          <tr>
            <td>Вес , кг</td>
            <td align="right">6,75</td>
          </tr>
          <tr>
            <td>Габариты упаковки, см</td>
            <td align="right">54,5</td>
          </tr>
          <tr>
            <td>Габариты упаковки, см</td>
            <td align="right">41</td>
          </tr>
          <tr>
            <td>Габариты упаковки, см</td>
            <td align="right">42</td>
          </tr>
          <tr>
            <td>Объем упаковки, м куб.</td>
            <td align="right">0,093849</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Caracters;
