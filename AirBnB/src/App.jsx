import './App.css'

import Data from './Data'

import Head from './head'
import Hero from './hero'
import Body from './Body'


function App() {
    const DataElements = Data.map((e)=>{
        return <Body 
        key ={e.id}
        e = {e}
       
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
