import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import StockOverview from './StockOverview';
import Chart from "./Chart";
import About from "./About";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const StockDetails = () => {
  const underValuedCompanies = useLocation().state;
 
  const { title } = useParams();

  const [ company, setCompany ] = useState({});

  const [ aboutIsActive, setAboutIsActive ] = useState(false);

  const [ timeframe, setTimeframe ] = useState("H");
  
  const getAndSetCompanyDetails = (symbol) => {
    let details = {};
    underValuedCompanies.forEach(company => {
      if(company.Symbol === symbol){
        details = {...company};
      }
    });

    setCompany(details);
  }

  useEffect(() => {
    getAndSetCompanyDetails(title);
  }, []);

  useEffect(() => {
  }, [aboutIsActive]);

  return (
    <div style={{paddingBottom: "2em"}}>
      <header style={{paddingLeft: "2em", marginTop: "1em"}}>
        <div style={{
          width: "fit-content",
          background: "linear-gradient(3deg, orange, gold, white)",
          color: "#000",
          borderRadius: "50px",
          padding: ".5em 1.5em",
          border: "solid #000 1px",
        }}>
          <div>
            <div style={{
              display: "flex",
            }}>
              <p style={{margin: "0", fontWeight: "bold"}}>{title}</p>
              <p style={{margin: "0"}}>•</p>
              <p style={{margin: "0", fontWeight: "bold"}}>{company.Exchange}</p>
            </div>
          </div>
          <p style={{margin: "0", fontSize: "1.2rem", color: "gray"}}>{company.Sector}</p>
        </div>
      </header>
      <div className='overview'>
        <div className='chart-container'>
          <div className='timeframes'>
            <span onClick={() => setTimeframe("H")} 
              className={timeframe === "H" ? `active-timeframe` : null}>H</span>
            <span onClick={() => setTimeframe("D")}
              className={timeframe === "D" ? `active-timeframe` : null}>D</span>
            <span onClick={() => setTimeframe("W")}
              className={timeframe === "W" ? `active-timeframe` : null}>W</span>
            <span onClick={() => setTimeframe("M")}
              className={timeframe === "M" ? `active-timeframe` : null}>M</span>
          </div>
          <Chart symbol={title} timeframe={timeframe}/>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "40px 2fr 40px",
          alignItems: "center",
          justifyItems: "center"
        }}>
          {aboutIsActive ? 
          <BsChevronLeft className='arrow' size="40px" onClick={()=> {setAboutIsActive(false)}}
          style={{marginLeft: "60px"}}/> 
            : 
            <div></div>
          }
          {aboutIsActive ? <About company={company}/> : <StockOverview company={company}/>}
          {!aboutIsActive ? 
            <BsChevronRight className='arrow' size="40px" onClick={() => {setAboutIsActive(true)}}
            style={{marginRight: "60px"}}/>
            :
            <div></div>
          }
        </div>
      </div>
    </div>
  )
}

export default StockDetails