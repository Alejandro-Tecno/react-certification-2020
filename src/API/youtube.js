
const KEY = "AIzaSyAl-W9fExq-7Jn3lSj9ZxMcbME9w6tTWrY";
const channelID = "UCyRhIGDUKdIOw07Pd8pHxCw";
const URL = "https://www.googleapis.com/youtube/v3/search?key=";
const results = 5;

//let finalURL = `${URL}${KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${results}`


function getVideos() {
    
    fetch(`${URL}${KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${results}`)
    .then((response) => response.json())
    .then((responseJson) => {
    
        let videos = responseJson;
        return videos;     
    })
    .catch((error) => {
        console.error(error);
    });
    
}

export default getVideos;