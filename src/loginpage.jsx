import React from "react";
import "./style.css"
import outlook from "./assets/outlook.png"
import guestpic from "./assets/guest.png"
import profilepic from "./assets/profile.png"

import logoone from "./assets/logo1.png"




function Loginpage() {
  return (
    <>
        <div id="circle1" class="circle"></div>
    <div id="circle2" class="circle"></div>
    <div id="circle3" class="circle"></div>

    <div id="main">
        <img src="" alt="" id="back"/>
        <div id="particles-js"></div>
        <nav>
            <img id="logo" src={logoone} alt=""/>
            <div id="nav-part2">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Contact Us</h3>
            </div>
        </nav>
        <div id="page1">
            <div id="box">
                <img id="profile" src={profilepic} alt=""/>
                <div id="but">
                    <h3><img src={outlook} alt=""/><span><h2>SIGN IN WITH OUTLOOK</h2></span></h3>
                    <h3><img id="gust1" src={guestpic} alt=""/><span><h2>CONTINUE AS GUEST</h2></span></h3>
                </div>
            </div>
        </div>


    </div>
    <script src="./particles.js"></script>
    <script src="./appy.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" integrity="sha512-7eHRwcbYkK4d9g/6tD/mhkf++eoTHwpNM9woBxtPUBWm67zeAfFC+HrdoE2GanKeocly/VxeLvIqwvCdk7qScg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="./script.js"></script>
      
    </>


  )
}

export default Loginpage