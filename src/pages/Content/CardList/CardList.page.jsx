import React from 'react'
import Card from "../Card/"
import Mock from "../../../utils/youtube-videos-mock.json"
import styled from 'styled-components';

function CardList() {

    
    console.log(Mock.items)
    return (
        <StyledCard data-testid="content_div">
            {/* {Mock.items.map((video) =>( */}
            {Mock.items.filter(video => video.id.kind === "youtube#video" ).map((video) => (
                <Card data-testid="card_div"image={video.snippet.thumbnails.high.url}
                key={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
                />
            )) }
            
        </StyledCard>
    )
}


const StyledCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height:90vh;
    justify-content:space-between;
    padding: 1rem 2rem;
    margin-top:65px;
    
`;
export default CardList;
