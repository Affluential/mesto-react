import { useState, useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function handleChange(e) {
    e.target.name === "nameChange"
      ? setName(e.target.value)
      : setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="profile"
      title="Редактировать профиль"
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <fieldset className="popup__input">
        <input
          type="text"
          name="nameChange"
          value={name || ""}
          required
          onChange={handleChange}
          placeholder="Ваше имя"
          className="popup__input-item popup__input-item_change_name"
          id="sign-in-name"
          autoComplete="off"
          minLength="2"
          maxLength="40"
        />
        <span className="popup__input-error" id="sign-in-name-error"></span>
        <input
          type="text"
          name="statusChange"
          value={description || ""}
          required
          onChange={handleChange}
          placeholder="Ваше занятие"
          className="popup__input-item popup__input-item_change_status"
          id="sign-in-status"
          autoComplete="off"
          minLength="2"
          maxLength="200"
        />
        <span className="popup__input-error" id="sign-in-status-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
