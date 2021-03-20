import React from "react";
import styled from "styled-components";

function Card({ image, title, description }) {
  
  return (
    <StyledCard data-testid="card_div">
      <div  className="video-image">
        <img data-testid="card_img" src={image} alt="" />
      </div>
      <div className="video-content">
        <h2 data-testid="card_h2">{title.replace(/&#39;/, "'")}</h2>
        <p data-testid="card_p">{description}</p>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  background: #ffffff;
  position: relative;
  border: 2px solid #c4c2c2;
  border-radius: 5px;
  margin: 10px auto;

  .video-image {
    height: 150px;
    width: 350px;
    border-radius: 5px 5px 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .video-content {
    padding: 0rem 1rem;
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 0.8rem;
      color: #403d4e;
    }
  }
`;

export default Card;
