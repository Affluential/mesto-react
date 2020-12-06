import React from 'react';
function PopupWithForm(props) {
  const title = props.title;
  const name = props.name;
  const children = props.children;
  const isOpen = props.isOpen;
  const onClose = props.onClose;
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_is-opened"}`}>
    <form
      className={`popup__container popup__container_type_${name}`}
      action="#"
      name="popupForm"
    >
      <h2 className="popup__title">{title}</h2>
      {children}
      <button
        type="submit"
        className="popup__save-button"
        value="Сохранить"
      >
        Сохранить
      </button>
      <button
        onClick={onClose}
        type="reset"
        className="popup__close-button"
        aria-label="Закрыть"
      ></button>
    </form>
  </div>
  );
}
export default PopupWithForm;