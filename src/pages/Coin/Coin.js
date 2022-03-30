import React from 'react'
import './Coin.css'
import { Link } from 'react-router-dom';
import {CoinItem} from '../../components/CoinItem/CoinItem'
import {FaCoins} from 'react-icons/fa'

export const Coin = (props) => {
  return (
    <div className='container coin-section'>
      <div className='navbar'>
          <FaCoins className='icon' />
          <h2 className='head-text'>Monitor <span className='purple'>your favorite coin activity</span></h2>
      </div>

      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Mkt Cap</p>
        </div>

        {
          props.dataCoins.map((coins) => {
            return(
              <Link to={`/coin/${coins.id}`} key={coins.id}>
                <CoinItem coins={coins}></CoinItem>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
