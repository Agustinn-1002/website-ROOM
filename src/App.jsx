import React from 'react'
import Navbar from './component/NavBar'
import { GlobalStyle } from '../src/styled/global';
import Header from './component/Header';

// import styled from 'styled-components'
// const Data = styled.div`
//   width:300px;
//   height:300px;
//   background-color:${props => props.desktop};
// /* @media(max-width:400px){
//   background-color:${props => props.mobile};
// }
// `; */

function App() {
  return (
    <div>
      <GlobalStyle />
      <Navbar></Navbar>
      <Header></Header>
      {/* <Data desktop='#000' mobile='#555'></Data> */}
    </div>
  );
}
export default App;
