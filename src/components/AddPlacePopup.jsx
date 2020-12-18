import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
function AddPlacePopup({ isOpen, onClose, onAddCard, isLoading }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleChange(e) {
    e.target.name === "nameChange"
      ? setName(e.target.value)
      : setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddCard({
      name,
      link,
    });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="add"
      title="Новое Место"
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <fieldset className="popup__input">
        <input
          type="text"
          name="nameChange"
          required
          placeholder="Название"
          className="popup__input-item popup__input-item_change_value"
          id="sign-in-title"
          autoComplete="off"
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={name}
        />
        <span className="popup__input-error" id="sign-in-title-error"></span>
        <input
          type="url"
          name="statusChange"
          required
          placeholder="Ссылка на картинку"
          className="popup__input-item popup__input-item_change_image"
          id="sign-in-url"
          autoComplete="off"
          onChange={handleChange}
          value={link}
        />
        <span className="popup__input-error" id="sign-in-url-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
