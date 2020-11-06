import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Maze from './maze';

const SplitLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 820px;
  margin: 10px auto;
  justify-content: space-between;
`;
const LeftSide = styled.div`
  margin: 50px 0 0;
  max-width: 380px;
`;
const RightSide = styled.div``;

class HomePage extends Component {
  render() {
    return (
      <SplitLayout>
        <LeftSide>
          <h1>I'm Spencer Smith</h1>
          <h2 css="margin-top: 15px;">and I like to build cool things for the web.</h2>

          <Link to="/nice">Nice</Link>
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
