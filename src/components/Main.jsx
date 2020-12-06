import React, {useEffect, useState} from 'react';
import api from "../utils/Api.js";
import Card from "./Card.jsx";
function Main(props) {
  const editProfile = props.editProfile;
  const addPlace = props.addPlace;
  const editAvatar = props.editAvatar;
  const onCardClick = props.onCardClick;
  
  const [userName, setUserName] = useState('');
  const [userDescription, setDescription] = useState('');
  const [userAvatar, setAvatar] = useState('');
  const [cards, setCards] = useState([]);
  const [userId, setUserId] = useState('')

  useEffect(()=>{
    api.getUserName().then((userData)=>{
      setUserId(userData._id)
      setUserName(userData.name);
      setDescription(userData.about);
      setAvatar(userData.avatar);
    }).catch((err)=>{console.log(`Ошибка:${err}`)})
  }, []);
  useEffect(()=>{
    api.getInitialCards().then((cardData)=>{
      setCards(cardData)
    }).catch((err)=>{console.log(`Ошибка:${err}`)})
  }, []);

  return (
    <main className="content">
    <section className="profile">
      <div className="profile__info">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
          <button className="profile__avatar-edit" onClick={editAvatar}></button>
        </div>
        <div className="profile__column">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Редактировать профиль"
            onClick={editProfile}
          ></button>
          <p className="profile__status">{userDescription}</p>
        </div>
      </div>
      <button
        type="button"
        className="profile__add-button"
        aria-label="Добавить"
        onClick={addPlace}
      ></button>
    </section>
    <section className="wrapper-cards">
      <ul className="cards">
        {cards.slice().reverse().map((card) => (
          <Card card={card} userId={userId} onCardClick={onCardClick} key={card._id}/>
        ))}
      </ul>
    </section>
  </main>
  );
}
export default Main;
