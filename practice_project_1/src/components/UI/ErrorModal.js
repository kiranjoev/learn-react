import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Card from './Card';
import style from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.closeErrorModal}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className={style.modal}>
      <header className={style.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={style.content}>
        <p>{props.message}</p>
      </div>
      <footer className={style.actions}>
        <Button onClick={props.closeErrorModal}>
          {props.buttonLable || 'Ok'}
        </Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeErrorModal={props.closeErrorModal} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          closeErrorModal={props.closeErrorModal}
          buttonLable={props.buttonLable}
        />,
        document.getElementById('overlay-root'),
      )}
    </React.Fragment>
  );
};
export default ErrorModal;
