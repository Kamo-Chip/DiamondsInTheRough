import React from 'react'

const StockTab = ({symbol, sector}) => {
  return (
    <div className='stock-tab'>
        <p>{symbol}</p>
        <p>{sector}</p>
    </div>
  )
}

export default StockTab