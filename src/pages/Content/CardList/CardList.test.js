import Mock from "../../../utils/youtube-videos-mock.json";
import React from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Content from "./CardList.page";




describe('Contents', () => {
    test('renders Content component', () => {
      render(<Content/>);
    });
  });
describe("Contents", () => {
    it("Renders the cards correctly", () => {
      // Initializes variables 
      const {getByTestId} = render(<Content/>);
      expect(getByTestId("content_div")).toBeInTheDocument();
      expect(screen.queryByText(/Video Tour/i)).toBeInTheDocument();
    }); 

    it("Renders the complete list of videos", () => {
        render(<Content/>);
        expect(screen.getAllByRole('img').length).toBe(24)
    })


  });




  describe("The mock is correct", () => {
    it("The contents of the array are the correct ones", () => {
      // Initializes variables 
      const firstVideoId = Mock.items[1];
      const imageUrls = Mock.items.map(video => video.snippet.thumbnails.high.url);
      const testMock = {
        
            "kind": "youtube#searchResult",
            "etag": "erqeM78PZDWIBe8qOGHGM2WdSE8",
            "id": {
              "kind": "youtube#video",
              "videoId": "nmXMgqjQzls"
            },
            "snippet": {
              "publishedAt": "2019-09-30T23:54:32Z",
              "channelId": "UCPGzT4wecuWM0BH9mPiulXg",
              "title": "Video Tour | Welcome to Wizeline Guadalajara",
              "description": "Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Wizeline",
              "liveBroadcastContent": "none",
              "publishTime": "2019-09-30T23:54:32Z"
            
          }}
                    
      expect(Mock.items.map(video => video.id.videoId)).toBeInstanceOf(Array);
      expect(firstVideoId).toEqual(testMock);

      for (let i = 0; i < Mock.length; i++) {
        expect(imageUrls[i]).toContain("https" && ".jpg");  
      }
      
    }); 
  });