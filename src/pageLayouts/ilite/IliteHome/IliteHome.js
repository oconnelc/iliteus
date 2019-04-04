import React from 'react';

import Button from '../../../components/Button';
import Events from '../../../components/events';
import NewsCard from '../../../components/newscard/';
import SponsorTag from '../../../components/SponsorTag/SponsorTag';

import newsData from "../../../lib/iliteHome/newsData.json";

function getNews() {
  //<div className="iliteHome__news-container"></div>
  /*<NewsCard title="ILITE hosted Kickoff this year!" image={require('../../../assets/images/frc/kickoff.jpg')}>
  3... 2... 1...BLAST OFF! This years kickoff saw the launch of the 2019 FIRST Robotics Competition, <b>Destination: Deep Space</b>.ILITE had the pleasure to host the event for our area, inviting many other teams to attend.We had a blast together with all the attending teams and we are excited for the upcoming season.
          </NewsCard >*/
  let newsObject = newsData.map(news => {
    return (
      <NewsCard
        title={newsData.News[i].heading}
        image={newsData.News[i].image}
      >
        {newsData.News[i].description}
      </NewsCard>
    );
  });

  console.log(newsObject);
  return newsObject;
}

const IliteHome = (props) => {
  return (
    <div className='iliteHome'>
      <div className="iliteHome__banner">
        <div className="iliteHome__banner-text-container">
          <h1 className="iliteHome__banner-title">ILITE</h1>
          <h2 className="iliteHome__banner-subtitle">Inspiring Leaders In Technology and Engineering</h2>
          <p className="iliteHome__banner-description">
            We are a team founded on the principles of leadership, teamwork, and academic rigor. Through competitions, outreach,
            and mentorship we passionately advocate for science and technology in our schools, communities, and throughout the world.
          </p>
          <Button link="/ilite/about">
            Learn More About Us!
          </Button>
        </div>
      </div>
      <div className="iliteHome__description">
        <h1 className="iliteHome__description-header">What is ILITE?</h1>
        <br />
        <div className="iliteHome__description-container">
          <p>ILITE stands for "Inspiring Leaders In Technology and Engineering" and we are a robotics team at Battlefield High School consisting of a FIRST Robotics Competition team, multiple FIRST Tech Challenge teams, a Cyber Patriot Cyber Defense team, and a Betaware Computer Science team. However, ILITE does much more than just robotics. We are very active in our community, having founded other robotics teams and STEAM related programs in schools throughout the county, and we host numerous events, workshops, and camps throughout the year to spread the message of STEAM. Outreach is just as important to us as competing in robotics and ILITE is committed to creating a community of STEAM.</p>
          <br />
          <div className="iliteHome__description-button">
            <Button link="/frc">Learn About Our FRC Team</Button>
            <Button link="/outreach">Learn About Our Outreach</Button>
          </div>
        </div>
      </div>
      <div className="iliteHome__news">
        <h1 className="iliteHome__news-header">News</h1>
        <br />
        <div className="iliteHome__news-container">
          {getNews()}
          {/* <NewsCard title="ILITE hosted Kickoff this year!" image={require('../../../assets/images/frc/kickoff.jpg')}>
            3... 2... 1... BLAST OFF! This years kickoff saw the launch of the 2019 FIRST Robotics Competition, <b>Destination: Deep Space</b>. ILITE had the pleasure to host the event for our area, inviting many other teams to attend. We had a blast together with all the attending teams and we are excited for the upcoming season.
          </NewsCard>
          <NewsCard title="The 2019 Haymaker STEAM Expo was a blast!" image={require('../../../assets/images/outreach/steamexpo/expologo.png')}>
            The Haymaker STEAM Expo this year has passed and it certainly was a lot of fun. The FLL scrimmage was expecially interesting with many high level teams coming to practice before their next tournament. In addition, the escape room attracted much attention and was booked almost the entire day. These weren't the only activites however, there were numerous other activities and demonstrations for all ages. All in all, the wide variety of fun activities with the over 1900 people in attendance made for a great day.
          </NewsCard>
          <NewsCard title="We just launched our new website!" image={require('../../../assets/images/site_screenshot.png')}>
            We're incredibly excited to have launched our new website here at ilite.us! If you haven't already noticed, we've made significant changes to both the style and structure of the site. The biggest change, however, has been made to the background operation. The new site is based off of a website development tool called GatsbyJS that allows the site to run faster and smoother. To learn more about GastbyJS <a href="http://gatsbyjs.org" target="_blank">visit here</a>.
          </NewsCard> */}
        </div>
      </div>
      <div className="iliteHome__sponsors">
        <h1 className="iliteHome__sponsors-header">Sponsors</h1>
        <p className="iliteHome__sponsors-description">
          We thank our Sponsors for their past and present support
        </p>
        <br />
        <div className="iliteHome__sponsors-container">
          <SponsorTag
            image={require('../../../assets/images/sponsors/usstem.png')}
            url="http://www.usstem.org">
            US Stem
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/afa.png')}
            url="http://www.afa.org/">
            Air Force Association
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/bah.png')}
            url="https://www.boozallen.com/">
            Booz Allen Hamilton
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/micron.png')}
            url="https://www.micron.com/">
            Micron
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/spark.jpg')}
            url="http://www.poweredbyspark.org/">
            SPARK
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/pepsi.png')}
            url="https://www.pepsi.com/">
            Pepsi
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/lockheedmartin.png')}
            url="https://www.lockheedmartin.com/us.html">
            Lockheed Martin
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/pwcs.png')}
            url="https://www.pwcs.edu/">
            Prince William County Schools
          </SponsorTag>
          <SponsorTag
            image={require('../../../assets/images/sponsors/macedontechnologies.png')}
            url="https://www.macedontechnologies.com/">
            Macedon Technologies
          </SponsorTag>
        </div>
      </div>
    </div>
  );
};

IliteHome.propTypes = {

};

export default IliteHome;
