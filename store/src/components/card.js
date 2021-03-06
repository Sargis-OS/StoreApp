import React from "react";

const Card = props => {
  return (
    <div className="col-md-1-3">
      <div className="card-background m-15 p-5">
        <div className="frow column-center">
          {props.name}
          <img src={props.image} className="card-image" alt="" />
          <div className="price">${props.price}</div>
          <div>{props.url}</div>
          <button onClick={props.onClick} className="cart-button">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
