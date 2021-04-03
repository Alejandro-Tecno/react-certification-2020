import RelatedVideos from "./";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
const relatedData = {
  kind: "youtube#searchListResponse",
  etag: "sULQw4Z-fz8TGJxOJalMJgeCW-Y",
  nextPageToken: "CAUQAA",
  regionCode: "MX",
  pageInfo: {
    totalResults: 108,
    resultsPerPage: 5,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "Pv8NmoXEdatwdAzqcYgTqR2fmHI",
      id: {
        kind: "youtube#video",
        videoId: "OeVp9S1HzqI",
      },
      snippet: {
        publishedAt: "2014-05-20T21:27:05Z",
        channelId: "UCoookXUzPciGrEZEXmh4Jjg",
        title: "Sesame Street: Birthdays | Elmo's World",
        description:
          "Everybody loves birthdays and they love Elmo too! In this classic Elmo's World episode, Elmo is learning all about birthdays!\n\nSubscribe to the Sesame Street Channel here: http://www.youtube.com/subscription_center?add_user=SesameStreet\n \nFor more fun games and videos for your preschooler in a safe, child-friendly environment, visit us at http://www.sesamestreet.org\n \nSesame Street is a production of Sesame Workshop, a nonprofit educational organization. The Workshop produces Sesame Street programs, seen in over 150 countries, and other acclaimed shows, including The Electric Company.  Beyond television, the Workshop produces content for multiple media platforms on a wide range of issues including literacy and numeracy, emotional wellbeing, health and wellness, and respect and understanding.  Learn more at http://www.sesamestreet.org.",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/OeVp9S1HzqI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Sesame Street",
        liveBroadcastContent: "none",
        publishTime: "2014-05-20T21:27:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "8zqAlOnA8woauyCjhk4PqVLaXck",
      id: {
        kind: "youtube#video",
        videoId: "slQpZyaciIg",
      },
      snippet: {
        publishedAt: "2015-09-10T13:54:38Z",
        channelId: "UCoookXUzPciGrEZEXmh4Jjg",
        title: "Sesame Street: Elmo's Songs Collection",
        description:
          "These are the songs, la la la la, Elmo's Songs! Sing with Elmo for twenty minutes straight to Elmo favorites like Elmo's Song, A Song About Elmo,  Elmo's Ducks, and more!\n\nSubscribe to the Sesame Street Channel here: http://www.youtube.com/subscription_center?add_user=SesameStreet\n\nYou can catch Sesame Street in the morning and the afternoon, weekdays on PBS.\n \nFor more fun games and videos for your preschooler in a safe, child-friendly environment, visit us at http://www.sesamestreet.org\n \nSesame Street is a production of Sesame Workshop, a nonprofit educational organization. The Workshop produces Sesame Street programs, seen in over 150 countries, and other acclaimed shows, including The Electric Company.  Beyond television, the Workshop produces content for multiple media platforms on a wide range of issues including literacy and numeracy, emotional wellbeing, health and wellness, and respect and understanding.  Learn more at http://www.sesamestreet.org.",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/slQpZyaciIg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Sesame Street",
        liveBroadcastContent: "none",
        publishTime: "2015-09-10T13:54:38Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Ss-7j36G1x7VoenND79BqhfGe3I",
      id: {
        kind: "youtube#video",
        videoId: "XLeUvZvuvAs",
      },
      snippet: {
        publishedAt: "2014-09-05T18:55:03Z",
        channelId: "UCoookXUzPciGrEZEXmh4Jjg",
        title: "Sesame Street: Janelle Monae - Power of Yet",
        description:
          "When something doesn't work out right now, follow Janelle Monae's advice and don't give up because you'll learn how! Keep trying and you'll reach your goal because that's the Power of Yet!\n--\nSubscribe to the Sesame Street Channel here: http://www.youtube.com/subscription_center?add_user=SesameStreet\n\nYou can catch Sesame Street in the morning and the afternoon, weekdays on PBS.\n \nFor more fun games and videos for your preschooler in a safe, child-friendly environment, visit us at http://www.sesamestreet.org\n \nSesame Street is a production of Sesame Workshop, a nonprofit educational organization. The Workshop produces Sesame Street programs, seen in over 150 countries, and other acclaimed shows, including The Electric Company.  Beyond television, the Workshop produces content for multiple media platforms on a wide range of issues including literacy and numeracy, emotional wellbeing, health and wellness, and respect and understanding.  Learn more at http://www.sesamestreet.org.",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/XLeUvZvuvAs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Sesame Street",
        liveBroadcastContent: "none",
        publishTime: "2014-09-05T18:55:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "eLK6NAGdSiZjfNslx-DKX1n0Hr0",
      id: {
        kind: "youtube#video",
        videoId: "71h8MZshGSs",
      },
      snippet: {
        publishedAt: "2019-04-11T18:08:31Z",
        channelId: "UCbCmjCuTUZos6Inko4u57UQ",
        title: "ABC Song + More Nursery Rhymes & Kids Songs - CoComelon",
        description:
          'Subscribe for new videos every week!    \nhttps://www.youtube.com/c/Cocomelon?sub_confirmation=1    \nA new compilation video, including one of our most recent songs, "The ABC Song"!    \n    \nWatch your favorite song by clicking a title below:    \n0:08 ABC Song   \n3:39 Head Shoulders Knees and Toes   \n6:30 The Car Color Song   \n10:46 Clean Up Song   \n13:31 The Shapes Song   \n17:44 The Musical Instruments Song   \n21:01 Tortoise and the Hare   \n24:43 Hot Cross Buns   \n27:19 Daisy Bell   \n29:43 Laughing Baby with Family   \n31:51 Peek-A-Boo   \n33:39 Johny Johny Yes Papa\n\nAbout Cocomelon:\n\nWhere kids can be happy and smart!\n\nAt Cocomelon, our goal is to help make learning a fun and enjoyable experience for kids by creating beautiful 3D animation, educational lyrics, and toe-tapping music. \n\nKids will laugh, dance, sing, and play along with our videos, learning letters, numbers, animal sounds, colors, and much, much more while simply enjoying our friendly characters and fun stories.\n\nWe also make life easier for parents who want to keep their kids happily entertained, giving you the peace of mind that your children are receiving quality educational content.  Our videos also give you an opportunity to teach and play with your children as you both watch!\n\nWEBSITE: http://www.Cocomelon.com\nFACEBOOK: https://www.facebook.com/Cocomelonkids\nINSTAGRAM: https://www.instagram.com/cocomelon_official/\nTWITTER: https://www.twitter.com/Cocomelonkids\n\n\nCopyright © Treasure Studio, Inc. All rights reserved.',
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/71h8MZshGSs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Cocomelon - Nursery Rhymes",
        liveBroadcastContent: "none",
        publishTime: "2019-04-11T18:08:31Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "99--xq8P2EWbGP0gWCCmLIzLYrs",
      id: {
        kind: "youtube#video",
        videoId: "uPMi65u2uLo",
      },
      snippet: {
        publishedAt: "2020-12-11T11:00:34Z",
        channelId: "UCPOw2O3_uZ1doro9iR4x6vw",
        title: "جميع سكتشات مشيع - الجزء 22",
        description:
          "الجزء الثاني والعشرين من مجموعة سكتشات عائلة مشيع\n-----------------------------------------\nالجزء 21: https://www.youtube.com/watch?v=Lm6KxZTkoLY\n-----------------------------------------\nلا تنسوا السبسكرايب لقناتنا حتى تجيكم المقاطع أول بأول https://www.youtube.com/subscription_center?add_user=mmoshaya\n\nانستجرام: http://instagram.com/mmoshaya\nسناب شات: mmoshaya\nفيسبوك: https://www.facebook.com/mmoshaya\nتويتر: https://twitter.com/MohamedMoshaya\n-----------------------------------------\nللاستفسارات التجارية: mo.moshaya@gmail.com",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/uPMi65u2uLo/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "mmoshaya",
        liveBroadcastContent: "none",
        publishTime: "2020-12-11T11:00:34Z",
      },
    },
  ],
};

describe("Video", () => {
  beforeEach(() =>
    render(
      <BrowserRouter>
        <RelatedVideos relatedData={relatedData} />
      </BrowserRouter>
    )
  );

  it("Renders images correctly", () => {
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("Renders titles correctly", () => {
    expect(screen.getByText(/Sesame/iw)).toBeInTheDocument();
  });

  it("contains the Related videos text", () => {
    const h2 = screen.getByRole("heading");
    expect(h2).toHaveTextContent("Related videos");
  });
});
