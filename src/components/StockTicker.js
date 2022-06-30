import React from 'react';
import Logo from "../data/logo.png";

const StockTicker = () => {
  return (
    <marquee className="stock-ticker">
      <div style={{display: "flex"}}>
        <img src={Logo} height="40px"/>
        <p style={{color: "red"}}>THIS IS NOT FINANCIAL ADVICE #YOLO</p>
        <img src={Logo} height="40px"/>
      </div>
    </marquee>
  )
}

export default StockTicker