import React from 'react'
import Card from "./card/Card"
import Mock from "../../utils/youtube-videos-mock.json"
import styled from 'styled-components';

function Content() {

    
    console.log(Mock.items)
    return (
        <StyledCard>
            {Mock.items.map((video) =>(
                <Card image={video.snippet.thumbnails.high.url}
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
    justify-content:space-around;
    padding: 1rem 2rem;
    margin-top:65px;
`;
export default Content;
