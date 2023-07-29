import './App.css'
import X from './images/image 12.png'
import Y from './images/mountain-bike 1.png'
import V from './images/wedding-photography 1.png'
import Data from './Data'

import Head from './head'
import Hero from './hero'
import Body from './Body'

function App() {
    const DataElements = Data.map((element)=>{
        return <Body 
        id ={element.id}
        title ={element.title}
        img = {element.img}
        description ={element.description}
        price ={element.price}
        coverImg ={element.coverImg}
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
        <Body 
       // img ={X}
       // name ="Life Lessons with Annie Zaferes"
       // price ="From 136$/"
      //  rating ={4.7}
      //  reviewCount ={6}
      //  country="USA"

        />
      //  <Body
      //  img ={Y}
      //  name ="Group Mountiain Biking experience"
      //  price ="From 125$/"
     //   rating ={4.5}
      //  reviewCount ={6}
      //  country="Canada"

         />
        <Body 
      //  img ={V}
      //  name ="Learn wedding photography"
     //   price ="From 136$/"
      //  rating ={4.1}
        //reviewCount ={6}
       // country="Ireland"

        />
</div>
    </div>
 )
}

export default App
