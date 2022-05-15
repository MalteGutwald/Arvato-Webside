import React from 'react'
import "../css/Header.css"

const Header = () => {
  
  return (
    <div>
        <ul className='header_ui' id="header_ui">
            <li className='header_li'>
                <img 
                    alt = "bildMalte"
                    src="https://i.imgur.com/ZiYgxSU.jpg" className="header_logo">
                </img>
            </li> 
            <li className="header_li" id="display1">
                <b className='header_b'>
                    Dieses Mal habe ich alles mit React gelöst!
                </b>   
            </li>
            <li className="header_li" id="display2">
                <b className='header_b'>
                    Mit React!
                </b>   
            </li>
        </ul>
    </div>
  )
}
export default Header


