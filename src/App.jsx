import React from 'react'
import Cards from './Cards'
import './index.css'
import sdata from './sdata'


const App = () =>(
  <>
    <h1 className="heading_style">List of top 5 Netflix Series in 2020</h1>

    {sdata.map((val,index)=>{
        return(
          <Cards 
                key={val.id}
                imgsrc={val.imgsrc} 
                title={val.title} 
                sname={val.sname} 
                link={val.link} 
          />
        )
    })}
  
  </>
)

export default App