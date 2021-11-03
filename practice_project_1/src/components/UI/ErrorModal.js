import React from 'react';
import Button from './Button';
import Card from './Card';
import style from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.closeErrorModal}></div>
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
    </div>
  );
};
export default ErrorModal;
