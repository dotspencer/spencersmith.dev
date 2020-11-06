import React, { Component } from 'react';
import styled from 'styled-components';

import Maze from './maze';

const SplitLayout = styled.div`
  display: flex;
  max-width: 900px;
  margin: 10px auto;
`;
const LeftSide = styled.div`
  background-color: lightblue;
  width: 100%;
`;
const RightSide = styled.div`
  background-color: lightgreen;
  width: 100%;
`;

class HomePage extends Component {
  render() {
    return (
      <SplitLayout>
        <LeftSide>
          <Maze/>
        </LeftSide>
        <RightSide>
          right
        </RightSide>
      </SplitLayout>
    );
  }
}

export default HomePage;
