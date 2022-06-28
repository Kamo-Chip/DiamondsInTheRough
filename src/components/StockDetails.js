import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'

const StockDetails = () => {
  const underValuedCompanies = useLocation().state;
 
  const { title } = useParams();

  const apiKey = "PE8EABGC2PRVN8JA";

  const [ company, setCompany ] = useState({});
  
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


  return (
    <div>
      <header style={{paddingLeft: "1em"}}>
        <div>
          <div style={{
            display: "flex",
          }}>
            <p style={{marginBottom: "0"}}>{title}</p>
            <p style={{marginBottom: "0"}}>•</p>
            <p style={{marginBottom: "0"}}>{company.Exchange}</p>
          </div>
        </div>
        <p style={{margin: "0"}}>{company.Sector}</p>
      </header>
      <div className='overview'>
        <div className='chart-container'>
          <p>$ Price</p>
          <div className='chart'>
          </div>
        </div>
        <div className="details">
          <h2>Details</h2>
          <div>
            <p>52 Weel High</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StockDetails