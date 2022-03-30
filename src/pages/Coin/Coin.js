import React from 'react'
import './Coin.css'
import {CoinItem} from '../../components/CoinItem/CoinItem'
import {FaCoins} from 'react-icons/fa'

export const Coin = (props) => {
  return (
    <div className='container coin-section'>
      <div className='navbar'>
          <FaCoins className='icon' />
          <h1> Coin <span className='purple'>Search</span></h1>
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
              <CoinItem coins={coins} key={coins.id}></CoinItem>
            )
          })
        }
      </div>
    </div>
  )
}
