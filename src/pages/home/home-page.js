import React, { Component } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Maze from './maze';
import Project from './project';

const SplitLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 850px;
  margin: 10px auto;
  justify-content: space-between;
`;
const Written = styled.span`
  display: inline;
  font-family: 'Nanum Pen Script', sans-serif;
  font-size: 1.3rem;
  color: indianred;
`;
const LeftSide = styled.div`
  margin: 50px 0 0;
  max-width: 450px;
`;
const RightSide = styled.div``;
const SectionTitle = styled.h2`
  margin: 50px auto 0;
  max-width: 850px;
`;
const MainContent = styled.div`
  margin: 20px auto 0;
  max-width: 850px;
  border-radius: 5px;
`;

class HomePage extends Component {
  render() {
    return (
      <>
        <SplitLayout>
          <LeftSide>
            <h1>I'm Spencer, and I like to build cool things with code.</h1>

            <p css="margin-top: 25px;">Frontend Engineer at SoFi and studying Computer Science at the University of Utah. <Written>(graduating May 2021)</Written></p>
            <p>I enjoy helping people on <a href="https://stackoverflow.com/users/3498950" target="_blank">StackOverflow</a> and launching side projects on <a href="https://www.producthunt.com/@dotspencer/made">Product Hunt</a>.</p>
            <p>Reach out or connect with me on <a href="https://www.linkedin.com/in/dotspencer/" target="_blank">LinkedIn</a> ✌️</p>

            {/* <LinkWrap>
              <Link to="/music">
                <img src="/img/music.svg"></img>
                Music
              </Link>
              <Link to="/projects">Projects</Link>
              <Link to="/articles">Blog</Link>
            </LinkWrap> */}

            {/* <h2>and I like to make cool things with code.</h2> */}
          </LeftSide>
          <RightSide>
            <Maze/>
          </RightSide>
        </SplitLayout>

        <SectionTitle>Projects</SectionTitle>
        <MainContent>
          <Project
            title="Wake Up Time"
            desc="Calculate optimal times to wake up based on your body's sleep cycles."
            url="https://wakeupti.me/"
            date="Sep, 2020"
            category="Web App"
            tags={['html', 'css', 'js']}
          />
          <Project
            title="Copy Arrow"
            desc="Quick access to common arrow symbols for copy and pasting."
            url="https://copyarrow.com/"
            date="Jun, 2020"
            category="Web App"
            tags={['html', 'css', 'js']}
          />
          <Project
            title="Emoji Launch"
            desc="A micro product launch website."
            url="https://emojilaunch.com/"
            date="Apr, 2020"
            category="Web App"
            tags={['Node.js', 'Express', 'PostgreSQL']}
          />
          <Project
            title="Music Mode for YouTube"
            desc="A distraction-free way to listen to music on YouTube."
            url="https://chrome.google.com/webstore/detail/music-mode-for-youtube/jeieekjcmkhfffleemgbiooooockfmha"
            date="Dec, 2019"
            emphasis={"featured on Lifehacker!"}
            category="Chrome Extension"
            tags={['html', 'css', 'js']}
          />
          <Project
            title="Effortless Reviews"
            desc="Review generation and customer feedback platform for local businesses."
            url="https://effortlessreviews.com/"
            date="Oct, 2019"
            category="Web App"
            tags={['Node.js', 'Express', 'React.js', 'NGINX', 'Docker', 'MySQL', 'Flyway', 'Stripe']}
          />
          <Project
            title="Email Taco"
            desc="Dynamic GIF countdown timers for expring offers."
            url="https://emailtaco.com/"
            date="Aug, 2019"
            category="Web App"
            tags={['Node.js', 'Express']}
          />
          <Project
            title="Words To Time"
            desc="Convert text to how many minutes it will take to read aloud."
            url="https://wordstotime.com/"
            date="Feb, 2019"
            emphasis={"50k monthly users!"}
            category="Web App"
            tags={['html', 'css', 'js']}
          />
          <Project
            title="Keen HTML"
            desc="Interactive lessons to learn HTML."
            url="https://keenhtml.com/"
            date="Aug, 2018"
            category="Web App"
            tags={['Node.js', 'Express', 'React.js']}
          />

        </MainContent>
      </>
    );
  }
}

export default HomePage;
