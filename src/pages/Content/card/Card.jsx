import React from 'react';
import styled from 'styled-components';

function Card({ image, title, description }) {
  const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    align-items:center;
    background: #ffffff;
    position:relative;
    border: 2px solid #c4c2c2;
    border-radius: 5px;
    margin: 10px 0px;

    .video-image {
      background: url(${image});
      height: 150px;
    width: 350px;
    border-radius: 5px 5px 0px 0px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    }
    .video-content{
        padding: 0rem 1rem;
        h2{
            font-size:1.2rem;
        }
        p{
            font-size: .8rem;
            color: #403d4e;
        }
    }
  `;

  return (
    <StyledCard>
      <div className="video-image"> </div>
      <div className="video-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </StyledCard>
  );
}

export default Card;
