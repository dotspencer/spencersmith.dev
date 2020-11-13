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
  @media (max-width: 830px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const Written = styled.span`
  display: inline;
  font-family: 'Nanum Pen Script', sans-serif;
  font-size: 1.3rem;
  color: indianred;
  white-space: nowrap;
`;
const LeftSide = styled.div`
  margin: 50px 0 0;
  max-width: 450px;
  @media (max-width: 830px) {
    max-width: 600px;
    margin-top: 0;
    h1 {
      font-size: 1.6rem;
    }
  }
`;
const RightSide = styled.div`
  width: 100%;
  max-width: 350px;
`;
const SectionTitle = styled.h2`
  margin: 50px auto 0;
  max-width: 600px;
`;
const MainContent = styled.div`
  margin: 20px auto 0;
  max-width: 600px;
  border-radius: 5px;
`;

class HomePage extends Component {
  render() {
    return (
      <>
        <SplitLayout>
          <LeftSide>
            <h1>I'm Spencer, and I like to build cool things with code.</h1>

            <p css="margin-top: 25px;">Frontend Engineer at SoFi. Studying Computer Science at the University of Utah. <Written>(graduating May 2021)</Written></p>
            <p>I enjoy helping people on <a href="https://stackoverflow.com/users/3498950" target="_blank">StackOverflow</a> and launching side projects on <a href="https://www.producthunt.com/@dotspencer/made">Product Hunt</a>.</p>
            <p>Follow me on <a href="https://github.com/dotspencer" target="_blank">Github</a> or connect with me on <a href="https://www.linkedin.com/in/dotspencer/" target="_blank">LinkedIn</a> ✌️</p>

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
            tags={['Node.js', 'express', 'PostgreSQL']}
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
            tags={['Node.js', 'express', 'React.js', 'NGINX', 'Docker', 'MySQL', 'Flyway', 'Stripe']}
          />
          <Project
            title="Email Taco"
            desc="Dynamic GIF countdown timers for expring offers."
            url="https://emailtaco.com/"
            date="Aug, 2019"
            category="Web App"
            tags={['Node.js', 'express']}
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
            tags={['Node.js', 'express', 'React.js']}
          />
          <Project
            title="Taken Taken"
            desc="Simple domain name availability checker."
            url="https://www.takentaken.com/"
            date="Feb, 2017"
            category="Web App"
            tags={['Node.js', 'express']}
          />
          <Project
            title="Face Quiz"
            desc="Create your own quizzes to help learn names and faces."
            url="https://facequiz.org/"
            date="Nov, 2016"
            category="Web App"
            tags={['Node.js', 'express', 'html', 'css', 'js']}
          />

        </MainContent>
      </>
    );
  }
}

export default HomePage;
