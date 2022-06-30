import React from 'react'

const StockOverview = ({company}) => {
  return (
    <div className="details">
    <div style={{
      padding: "1em .5em",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }}>
      <span>{company.AssetType}</span>
      <span>{company.Country}</span>
      <span>{company.Sector}</span>
    </div>
    <div className='stock-details'>
      <p>MARKET CAP</p>
      <p>${((Number)(company.MarketCapitalization)).toLocaleString()}</p>
    </div>
    <div className='stock-details'>
      <p>P/E RATIO</p>
      <p>{((Number)(company.PERatio)).toFixed(2)}</p>
    </div>
    <div className='stock-details'>
      <p>PEG RATIO</p>
      <p>{((Number)(company.PEGRatio)).toFixed(2)}</p>
    </div>
    <div className='stock-details'>
      <p>DIVIDEND YIELD</p>
      <p>{((Number)(company.DividendYield) * 100).toFixed(2)}%</p>
    </div>
    <div className='stock-details'>
      <p>ROE</p>
      <p>{((Number)(company.ReturnOnEquityTTM)).toFixed(2)}</p>
    </div>
    <div className='stock-details'>
      <p>52 WEEK HIGH</p>
      <p>{company["52WeekHigh"]}</p>
    </div>
    <div className='stock-details'>
      <p>52 WEEK LOW</p>
      <p>{company["52WeekLow"]}</p>
    </div>
  </div>
  )
}

export default StockOverview