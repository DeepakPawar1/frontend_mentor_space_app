import './landingPageStyles.css';
import logo from '../assets/images/logo.svg';
import ham from '../assets/images/Hamburger.svg';
import closeham from '../assets/images/CloseHam.svg';
import {useState} from 'react';

function LandingPage(){

    const [clicked,setClicked] = useState(false);

    const handleClick=()=>{
        setClicked((current)=>{
            return !current;
        });
    }

    return (
        <div className="main">

            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className={clicked? " content nocontent":"content" }>
                    <ul>
                        <li class="border">    HOME</li>
                        <li class="border">    DESTINATION</li>
                        <li class="border">    CREW</li>
                        <li class="border">    TECHNOLOGY</li>
                    </ul>
                </div>
                <div className="ham" onClick={handleClick}>
                    <img src={ham} alt="" className={clicked ? "": "notactive"}/>
                    <img src={closeham} alt="" className={clicked ? "notactive": ""}/>
                </div>
            </div>
            <div className="main-content">
            <div className="left">
                <div className="container">
                <p>SO, YOU WANT TO TRAVEL TO</p>
                <p>SPACE</p>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className="right">
            
            <div className="circle">
               <p className="exp">EXPLORE</p> 
            </div>
            </div>
            </div>
            <div className="content">

            </div>
        </div>
    )
}
export default LandingPage;