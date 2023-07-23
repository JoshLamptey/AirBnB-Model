import './App.css'
import X from './images/image 12.png'
import Y from './images/mountain-bike 1.png'
import V from './images/wedding-photography 1.png'

import Head from './head'
import Hero from './hero'
import Body from './Body'

function App() {
 return(
    <div>
        <Head />
        <Hero/>
        <div className="container">
        <Body 
        img ={X}
        name ="Life Lessons with Annie Zaferes"
        price ="From 136$/"
        rating ={4.7}
        reviewCount ={6}
        country="USA"

        />
        <Body
        img ={Y}
        name ="Group Mountiain Biking experience"
        price ="From 125$/"
        rating ={4.5}
        reviewCount ={6}
        country="Canada"

         />
        <Body 
        img ={V}
        name ="Learn wedding photography"
        price ="From 136$/"
        rating ={4.1}
        reviewCount ={6}
        country="Ireland"

        />
</div>
    </div>
 )
}

export default App
