import react from 'react'
import logo from './images/airbnb-logo.png'

export default function head(){
    return(
        <div>
            <nav>
                <img src={logo} alt="" />
            </nav>
        </div>
    )
}