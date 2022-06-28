import React, { useState, useEffect } from 'react'
import { db } from "../firebase";
import {getDoc, doc} from "firebase/firestore";
import StockTab from '../components/StockTab';
import { Link } from 'react-router-dom';

const Main = () => {
    const [ data, setData ] = useState([]);
    
    const docID = "indxIlrdUZzw2lMzGSt5";

    const getSymbols = async () => {
        const dataBase = await getDoc(doc(db, "data", docID));
        const underValuedCompanies = dataBase.data().underValuedCompanies;
        setData(underValuedCompanies);
    }
    
    useEffect(() => {
        getSymbols();
    }, []);

  return (
    <main className="main-container">
        <h1>Top 15 Undervalued Stocks</h1>
        <div className='undervaluedstocks-container'>
            <section className='section-header'>
                <p>Symbol</p>
                <p>Sector</p>
            </section>
            <section>
                {data.map(element => 
                    <Link to={`/stockdata/${element.Symbol}`} state={data}>
                        <StockTab symbol={element.Symbol} sector={element.Sector}/>)
                    </Link>
                )}
            </section>
        </div>
    </main> 
  )
}

export default Main