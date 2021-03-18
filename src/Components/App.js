import React,{useState} from 'react'
import "./App.css"
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import image from "./download.png"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function App() {
  return (
    <div className="App">
      <div>
        <header className="Header">
          <h4>Awesome</h4>
          <nav className="Nav">
            <p href="/">FEATURES</p>
            <p href="/">TESTIMONIALS</p>
            <p href="/">ABOUT US</p>
            <p href="/">CONTACT</p>
            <button className="button1">TRY FOR FREE</button> 
            <button className="button2">LOGIN</button>
          </nav>
        </header>
      </div>
      <div>
      <div class="up">
        <br/>
        <p>AI</p>  

        <p>crem<br/>lpsum is <br/> simply dummy text <br/>of the pricing and <br/> typescripting industry</p>
      </div>
      </div>
      <div style={{ backgroundColor: "#f1f1f1"}}>
      <h1 style={{ textAlign: "center" }}>Testimonials</h1>
      <div className="App1">
        <Carousel breakPoints={breakPoints}>
          <div><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}}src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
          <div style={{alignItems:"center"}}><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}} src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
          <div><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}} src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
          <div><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}} src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
          <div><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}}src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
          <div><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}} src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
          <div><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}}src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
          <div><img style={{ backgroundColor: "#f1f1f1",borderRadius:"50px",width:"100px",alignItems:"center"}}src={image}/><h5>Manzi</h5><h5>Front end Engineer</h5>
          <p>"It is very useful platform<br/>for me any my collegues"</p></div>
        </Carousel>
      </div>
      </div>
      <div>
        <h1 style={{textAlign:"center",padding:"20px 0px 40px 0px"}} >About Us</h1>
      <div className="box-area">
       <div className="single-box">
          <div class="img-text"><span class="header-text"><h5>Who we are</h5></span></div>
          <p>Officia ex eu magna aliquip. Do sint aliquip aliquip adipisicing. 
            Eu laborum irure fugiat quis anim minim non elit consequat. Commodo 
            pariatur ex incididunt dolore. Tempor aute esse magna Lorem Lorem 
            nulla ex non irure veniam sint. Elit sit aliquip commodo consequat do.
          </p>
         <div style={{padding:"20px"}}><button style={{padding:"10px"}}>Read More</button></div>       
        </div>
        <div className="single-box">
          <div class="img-text">
          <span class="header-text">
            <h5 style={{textAlign:"left",}}>Who we do</h5></span></div>
          <p>Officia ex eu magna aliquip. Do sint aliquip aliquip adipisicing. 
            Eu laborum irure fugiat quis anim minim non elit consequat. Commodo 
            pariatur ex incididunt dolore. Tempor aute esse magna Lorem Lorem 
            nulla ex non irure veniam sint. Elit sit aliquip commodo consequat do.
          </p>
          <div style={{padding:"20px"}}><button style={{padding:"10px"}}>Read More</button></div>
        </div>
        <div className="single-box">
          <div class="img-text">
            <span class="header-text"><h5>Who we started</h5></span></div>
          <p>Officia ex eu magna aliquip. Do sint aliquip aliquip adipisicing. 
            Eu laborum irure fugiat quis anim minim non elit consequat. Commodo 
            pariatur ex incididunt dolore. Tempor aute esse magna Lorem Lorem 
            nulla ex non irure veniam sint. Elit sit aliquip commodo consequat do.
          </p>
          <div style={{padding:"20px"}}><button style={{padding:"10px"}}>Read More</button></div>
        </div>
      </div>
      </div>
      <div className="contact">
      <h1 style={{textAlign:"center",color:"white"}}>Contact Us</h1>
      <div class="flex-container">
      
	<div class="a" style={{padding:"50px"}}>
    <div style={{padding:"20px"}}>
    	<h5>Location</h5>
        <p>Santa clase,USA</p>
        <p>Chennai,India</p>
     </div>
     <div style={{padding:"20px"}}>
    	<h5>Phone</h5>
        <p>+41 345 675 987</p>
        <p>+91 8866523412</p>
     </div>
     <div style={{padding:"20px"}}>
    	<h5>Email Address</h5>
        <p>abc@gmail.com</p>
     </div>
        
    
    </div> 
  <div class="container">
  <form action="/action_page.php">
  <div class="row">

    <div class="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
    </div>
  </div>
  <div class="row">
    
    <div class="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
    </div>
  </div>
  
  <div class="row">
   
    <div class="col-75">
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
    </div>
  </div>
  <div class="row">
    <input type="submit" value="Submit"/>
  </div>
  </form>
</div>
   
</div>
      </div>      


    </div>
  )
}

export default App

