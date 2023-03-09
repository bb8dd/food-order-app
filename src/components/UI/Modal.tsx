import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

interface ModalProps {
  onHideCart: () => void;
  children: React.ReactNode;
}

const portalElement = document.getElementById('overlays');

function Backdrop({ onHideCart }: { onHideCart: () => void }) {
  const tabIndex = 3;
  return (
    <div className={style.backdrop} onClick={onHideCart} tabIndex={tabIndex} onKeyDown={onHideCart} role="button" aria-hidden />
  );
}

function ModalOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.modal}>
      <div className={style.content}>{children}</div>
    </div>
  );
}

function Modal({ onHideCart, children }: ModalProps) {
  return (
    <>
      {portalElement && ReactDOM.createPortal(<Backdrop onHideCart={onHideCart} />, portalElement)}
      {portalElement && ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
}

export default Modal;
