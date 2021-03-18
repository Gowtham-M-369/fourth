import React,{useState} from 'react'
import "./App.css"
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import image from "./download.png"
import person from "./one.jpg"
import iconPlaceholder from "./two.jpg"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


function App() {
  return (
    <div >
      <div className="App">
      <div>
        <header className="Header">
          <h4 style={{fontSize:"30px"}}>Awesome</h4>
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
      <div className="r2">
        <div className="r2Images">
          <img className="person" src={person} alt="person"/>
          <img className="icon-placeholder" src={iconPlaceholder} alt="icon-placeholder"/>
        </div>
        <div className="r2para">
          <h1>Hello! We are</h1>
          <h1>Here To help.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam massa turpis, semper fringilla tempor a, sollicitudin ut felis. In lobortis ullamcorper sapien efficitur sagittis. Nulla felis lacus, viverra quis nisi a, rhoncus laoreet ligula. Curabitur porta tellus magna, quis blandit risus gravida in. Pellentesque vehicula lorem eget euismod gravida. Aliquam accumsan purus sit amet libero mattis, a vulputate mauris rutrum. Sed id nulla nec risus placerat accumsan a nec metus. Morbi tincidunt molestie libero ac aliquet. Vestibulum congue nisi ac purus malesuada venenatis. Sed aliquam neque in ipsum vulputate, id pharetra quam bibendum. Nulla facilisi.
          </p>
        </div>
      </div>
      <svg style={{display: "block"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#272888" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,240C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        <path fill="rgb(78, 4, 252)" fill-opacity="1" d="M0,224L60,202.7C120,181,240,139,360,149.3C480,160,600,224,720,240C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>

      </div>
     
      <div style={{backgroundColor:"rgb(72, 8, 248)",alignItems:"center"}} >
      <h1 style={{textAlign:"center",color:"white",padding:"20px"}}>Feautures</h1>
<div >
<div class="flex-containerr">
  <div><div class="up">
        <br/>
        <p style={{fontSize:"25px"}}>AI</p>  
 <p style={{fontSize:"12px"}}>crem<br/>lpsum is <br/> simply dummy text <br/>of the pricing and <br/> typescripting industry</p>
      </div></div>
  <div style={{marginTop:"125px"}}> <div class="up1">
        <br/>
        <div class="rotate">
        <p style={{fontSize:"25px"}}>Chatbot</p>  
         <p style={{fontSize:"12px"}}>crem<br/>lpsum is <br/> simply dummy text <br/>of the pricing and <br/> typescripting industry</p>
        </div>  
        
      </div></div>
  <div> <div class="up">
        <br/>
        <p style={{fontSize:"25px"}}>UX</p>  
 <p style={{fontSize:"12px"}}>crem<br/>lpsum is <br/> simply dummy text <br/>of the pricing and <br/> typescripting industry</p>
      </div></div>  
</div>
<div style={{marginTop:"-30px"}}class="flex-containerr">
  <div><p style={{fontSize:"15px",padding:"0px 0px 50px 150px",color:"white",width:"900px",lineHeight:"1.6"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua. Viverra justo nec ultrices dui. Ullamcorper eget nulla facilisi etiam 
    dignissim diam quis. Sit amet justo donec enim diam vulputate ut pharetra. Tempor id eu nisl nunc mi 
    ipsum faucibus vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada. Faucibus 
    pulvinar elementum integer enim neque. Euismod quis viverra nibh cras pulvinar.
  </p></div>
  
  <div style={{marginTop:"-80px"}}><div class="up1">
        <br/>
        <div class="rotate">
        <p style={{fontSize:"25px"}}>Payment</p>  
         <p style={{fontSize:"12px"}}>crem<br/>lpsum is <br/> simply dummy text <br/>of the pricing and <br/> typescripting industry</p>
        </div>
      </div></div>  
</div>
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
         <div style={{padding:"20px"}}><button class="button2" style={{padding:"10px"}}>Read More ....</button></div>       
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
          <div style={{padding:"20px"}}><button class="button2" style={{padding:"10px"}}>Read More ....</button></div>
        </div>
        <div className="single-box">
          <div class="img-text">
            <span class="header-text"><h5>Who we started</h5></span></div>
          <p>Officia ex eu magna aliquip. Do sint aliquip aliquip adipisicing. 
            Eu laborum irure fugiat quis anim minim non elit consequat. Commodo 
            pariatur ex incididunt dolore. Tempor aute esse magna Lorem Lorem 
            nulla ex non irure veniam sint. Elit sit aliquip commodo consequat do.
          </p>
          <div class="float" style={{padding:"20px"}}><button class="button2" style={{padding:"10px"}}>Read More ....</button></div>
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

