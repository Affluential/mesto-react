import React from 'react';
function Card(props) {
  const card = props.card;
  const userId = props.userId;
  const onCardClick = props.onCardClick;
  function handleClick() {
    onCardClick(card);
  }  
  return (
      <li className="card" id={card._id}>
        <button type="button" className="card__delete" aria-label="Удалить" style={{display:`${card.owner._id===userId&& `block`}`}}></button>
        <div className="card__image" style={{backgroundImage: `url(${card.link})`}} onClick={handleClick}></div>
        <div className="card__column">
          <h2 className="card__title">{card.name}</h2>
          <div className="card__like-wrapper">
            <button type="button" className="card__like" aria-label="Понравилось"></button>
            <p className="card__like-counter">{card.likes.length}</p>
          </div>
        </div>
      </li>
    )
  };
export default Card;