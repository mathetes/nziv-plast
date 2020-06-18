/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./ModalCommerce.scss";

const ModalCommerce = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Запросить коммерческое предложение
        </ModalHeader>
        <ModalBody>
          <input
            className="modal__form_input"
            type="email"
            placeholder="Ваш email"
          />
          <input
            className="modal__form_input"
            type="phone"
            placeholder="Ваш телефон"
          />
          <input
            className="modal__form_input"
            type="text"
            placeholder="Ваше ФИО"
          />
          <input
            className="modal__form_input"
            type="textarea"
            placeholder="Дополнительная информация"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Отправить
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Отмена
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCommerce;
