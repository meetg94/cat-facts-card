import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import './FactCard.css'


export default function MediaCard() {

    const [catPics, setCatPics] = useState([])
    const [catFacts, setCatFacts] = useState([])

    function fetchData(){
      
    const catPicsAPI = 'https://api.thecatapi.com/v1/images/search'
    const catFactsAPI = 'https://catfact.ninja/fact'


    const getcatPics = axios.get(catPicsAPI)
    const getcatFacts = axios.get(catFactsAPI)
    axios.all([getcatPics, getcatFacts])
      .then(axios.spread((...allData) => {
        const allDataCat = allData[0].data
        const allDataCatFact = allData[1].data
        
        setCatPics(allDataCat[0].url)
        setCatFacts(allDataCatFact.fact)
        })
      )
    }
      
  
    useEffect(() => {
      fetchData()
    }, [])

  return (
    <>
    <div>
        <div className="card-container">
            <img className="image-card" src={catPics} />
            <p className="fact-text">{catFacts}</p>
            <button onClick={fetchData}>Next Fact and Image</button>
        </div>
    </div>
    </>
  );
  }