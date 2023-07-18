import './App.css'
import X from './images/image 12.png'
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
        />
        <Body
        img ={X}
        name ="Life Lessons with Maliah Zaferes"
        price ="From 13$/"
         />
        <Body 
        img ={X}
        name ="Life Lessons with Katie Zaferes"
        price ="From 136$/"
        />
</div>
    </div>
 )
}

export default App
