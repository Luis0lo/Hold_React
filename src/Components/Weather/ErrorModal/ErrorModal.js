import css from './errorModal.module.css';

const ErrorModal = (props) => {
  return (
    <>
      <div className={css.backdrop} onClick={props.onConfirm}></div>
      <div className={css.modal}>
        <header className={css.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={css.content}>
          <p>{props.message}</p>
        </div>
        <footer className={css.actions}>
          <button onClick={props.onConfirm} >Close</button>
        </footer>
      </div>
    </>
  );
};

export default ErrorModal;