import React, { useEffect, useState } from 'react'
import './Featured.css'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import { API_URL } from '../../environment/Constant'
import axios from 'axios'

export const Featured = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(API_URL+'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false').then(res => {
        setData(res.data)

    }).catch((error) => {
      console.log(error)
    })
  }, [])

  if(!data) return null

  return (
    <div className='featured'>
      <div className="container">
        <div className="left">
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className='btn'>See More Coins</button>
        </div>

        <div className="right">
          {
            data.map((item, index) => (
              <div className="card" key={index}>
                <div className="top">
                  <img src={item?.image} alt={item?.name} />
                </div>
                <div>
                    <h5>{item?.name}</h5>
                    <p>${item?.current_price.toLocaleString()}</p>
                </div>
                {
                  item.price_change_percentage_24h < 0 ? <span className='red'>
                    <FiArrowDown className='icon' />{item.price_change_percentage_24h.toFixed(2)}%
                  </span> : <span className='green'>
                      <FiArrowUpRight className='icon' />{item.price_change_percentage_24h.toFixed(2)}%
                  </span>
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
