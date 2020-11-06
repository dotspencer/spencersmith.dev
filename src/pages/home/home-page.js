import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Maze from './maze';

const SplitLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 850px;
  margin: 10px auto;
  justify-content: space-between;
`;
const LeftSide = styled.div`
  margin: 50px 0 0;
  max-width: 450px;
`;
const RightSide = styled.div``;
const LinkWrap = styled.div`
  margin-top: 30px;
`;

class HomePage extends Component {
  render() {
    return (
      <SplitLayout>
        <LeftSide>
          <h1>I'm Spencer, and I like to build cool things with code.</h1>

          <p>Frontend Engineer at <a href="https://sofi.com">SoFi</a> and Computer Science student at the University of Utah.</p>

          <LinkWrap>
            <Link to="/music">
              <img src="/img/music.svg"></img>
              Music
            </Link>
            <Link to="/projects">Projects</Link>
            <Link to="/articles">Blog</Link>
          </LinkWrap>

          {/* <h2>and I like to make cool things with code.</h2> */}
        </LeftSide>
        <RightSide>
          <Maze/>
        </RightSide>
      </SplitLayout>
    );
  }
}

export default HomePage;
