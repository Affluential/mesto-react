import React, {useState} from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx'

function App() {
  const [isEditProfilePopupOpen, changeProfilePopupOpen] = useState(false);
  function onEditProfile() {
    changeProfilePopupOpen(true)
  }
  const [isAddPlacePopupOpen, changePlacePopupOpen] = useState(false);
  function onAddPlace() {
    changePlacePopupOpen(true)
  }
  const [isEditAvatarPopupOpen, changeAvatarPopupOpen] = useState(false);
  function onEditAvatar() {
    changeAvatarPopupOpen(true)
  }
  const [selectedCard, setSelectedCard] = useState({
    isImageOpen: false,
    name:'',
    link:''
  })
  function handleCardClick(card) {
    const cardName = card.name;
    const cardLink = card.link;
    setSelectedCard({
      isImageOpen: true,
      name:cardName,
      link:cardLink
    })
  }
  function closeAllPopups() {
    changeProfilePopupOpen(false);
    changePlacePopupOpen(false);
    changeAvatarPopupOpen(false)
    setSelectedCard({
      isImageOpen: false,
      name:'',
      link:''
    })
  }


  return (
    <>
      <div className="page">
        <Header/>
        <Main editProfile={onEditProfile} addPlace={onAddPlace} editAvatar={onEditAvatar} onCardClick={handleCardClick}/>
        <Footer/>
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <PopupWithForm isOpen = {isEditProfilePopupOpen} onClose = {closeAllPopups} name = "profile" title = "Редактировать профиль">
          <fieldset className="popup__input">
          <input type="text" name="nameChange" required placeholder="Ваше имя"
            className="popup__input-item popup__input-item_change_name" id="sign-in-name" autoComplete="off" minLength="2"
            maxLength="40"/>
          <span className="popup__input-error" id="sign-in-name-error"></span>
          <input type="text" name="statusChange" required placeholder="Ваше занятие"
            className="popup__input-item popup__input-item_change_status" id="sign-in-status" autoComplete="off" minLength="2"
            maxLength="200"/>
          <span className="popup__input-error" id="sign-in-status-error"></span>
        </fieldset>
        </PopupWithForm>
        <PopupWithForm isOpen = {isAddPlacePopupOpen} onClose = {closeAllPopups} name = "add" title = "Новое Место">
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
            />
            <span
              className="popup__input-error"
              id="sign-in-title-error"
            ></span>
            <input
              type="url"
              name="statusChange"
              required
              placeholder="Ссылка на картинку"
              className="popup__input-item popup__input-item_change_image"
              id="sign-in-url"
              autoComplete="off"
            />
            <span 
              className="popup__input-error" 
              id="sign-in-url-error"
            ></span>
          </fieldset>
        </PopupWithForm>
        <PopupWithForm isOpen = {isEditAvatarPopupOpen} onClose = {closeAllPopups} name = "avatar" title = "Обновить аватар">
          <fieldset className="popup__input">
            <input
              type="url"
              name="statusChange"
              required
              placeholder="Ссылка на аватар"
              className="popup__input-item popup__input-item_change_image"
              id="sign-in-url"
              autoComplete="off"
              />
              <span 
                className="popup__input-error" 
                id="sign-in-url-error"
              ></span>
            </fieldset>
        </PopupWithForm>
      </div>
    </>
  );
}

export default App;
