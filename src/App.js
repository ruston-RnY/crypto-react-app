import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from './environment/Constant'

import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { Coin } from './pages/Coin/Coin';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import { CoinDetail } from './pages/CoinDetail/CoinDetail';

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
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/coin' element={<Coin dataCoins={coins}/>}></Route>
          <Route path='/coin' element={<CoinDetail />}>
            <Route path=':coinId' element={<CoinDetail />}></Route>
          </Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
