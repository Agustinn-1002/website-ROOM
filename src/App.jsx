import React,{useState} from 'react'
import Navbar from './component/NavBar'
import { GlobalStyle } from '../src/styled/global';
import Header from './component/Header';

function App() {

  const [dropDown , setDropDown] = useState(false);
  
  const dropNav = () => {
      setDropDown(!dropDown)
  } 

  return (
    <div>
      <GlobalStyle />
      <Navbar dropDown={dropDown} dropNav={dropNav}></Navbar>
      <Header></Header>
    </div>
  );
}
export default App;
