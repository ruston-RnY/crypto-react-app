import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from './environment/Constant'

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
// import { Coin } from './pages/Coin';
import Home from './pages/Home';

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get(API_URL+'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data)
    }).catch((error) => {
      console.log(error);
    })
  },[])

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      {/* <Coin></Coin> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
