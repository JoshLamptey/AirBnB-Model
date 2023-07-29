import './App.css'

import Data from './Data'

import Head from './head'
import Hero from './hero'
import Body from './Body'

function App() {
    const DataElements = Data.map((element)=>{
        return <Body 
        id ={element.id}
        title ={element.title}
        img = {element.coverImg}
        description ={element.description}
        price ={element.price}
        rating ={element.stats.rating}
        reviewCount={element.stats.reviewCount}
        location ={element.location}
        openSpots ={element.openSpots}
        
        />
    })

 return(
    <div>
        <Head />
        <Hero/>
        <div className="container">
    {DataElements}
</div>
    </div>
 )
}

export default App
