import React, { FC } from 'react';
import { StyleSheet } from 'react-native';

function RegisterScreen() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Green</title>
      <link rel="stylesheet" href="index_style.css" />
      {/* Button to open the modal login form */}
      <button onClick={() => document.getElementById('id01')!.style.display = 'block'}>Login</button>
      {/* The Modal */}
      <div id="id01" className="modal">
        <span onClick={() => document.getElementById('id01')!.style.display = 'none'} className="close" title="Close Modal">×</span>
        {/* Modal Content */}
        <form className="modal-content animate" action="/action_page.php">
          <div className="imgcontainer">
            <img src="img_avatar2.png" alt="Avatar" className="avatar" />
          </div>
          <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required />
            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" defaultChecked={true} name="remember" /> Remember me
            </label>
          </div>
          <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
            <button type="button" onClick={() => document.getElementById('id01')!.style.display = 'none'} className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
      <nav>
        <a href="index.html"><img src="photos/logobg.png" /></a>
        <div className="nav-links">
          <ul>
            <li><a>HOME</a></li>
            <li><a>LOGIN</a></li>
            <li><a>DOWNLOAD</a></li>
            <li><a>REPORT ERRORS</a></li>
          </ul>
        </div>
      </nav>
      <h1>Welcome to CycleSphere</h1>
      <p><i><br />"Playfully Recycling for a Positive World: Earn Points, Make a Difference!"</i><br /><br /></p><p>
      </p><div className="container">
        <p>The project aims to make recycling more enjoyable. The programme offers tasks to earn points that can be redeemed at specific locations. This could be, for example, throwing your rubbish in the right place. In summary, we want to get people to recycle in a fun and playful way.</p>
      </div>
      <h1><br /><br /><br />What are our goals?</h1>
      <div className="container3">
        <label>
          <input type="checkbox" />
          <div className="flip-card">
            <div className="front">
              <h2>Recycling</h2>
              <p>Click to Flip</p>
            </div>
            <div className="back">
              <hr />
              <p>
                Our aim is to achieve sustainability
                through recycling, avoiding further damage
                to our environment by unnecessarily purchasing materials.
              </p>
            </div>
          </div>
        </label>
        {/* Tartalom az elso részben */}
        <label>
          <input type="checkbox" />
          <div className="flip-card">
            <div className="front">
              <h2>Clean environment</h2>
              <p>Click to Flip</p>
            </div>
            <div className="back">
              <hr />
              <p>
                By keeping the environment clean
                we aim to protect our environment
                and our own lives.As a result, we will
                have healthier bodies and happier lives
              </p>
            </div>
          </div>
        </label>
        {/* Tartalom a második részben */}
        <label>
          <input type="checkbox" />
          <div className="flip-card">
            <div className="front">
              <h2>Preserving our wildlife</h2>
              <p>Click to Flip</p>
            </div>
            <div className="back">
              <hr />
              <p>Sadly, pollution harms animals and plants. However, proper waste management  could save lives.</p>
            </div>
          </div>
        </label>
        <label>
          <input type="checkbox" />
          <div className="flip-card">
            <div className="front">
              <h2>Building the future</h2>
              <p>Click to Flip</p>
            </div>
            <div className="back">
              <hr />
              <p>
                The time is now to make
                a difference so that future generations - and ourselves -
                can live in a purer and more fulfilling environment
              </p>
            </div>
          </div>
        </label>
      </div>
      <div className="container4">
        <p>
          <br /><br /><br /> "I appreciate the way the app educates
          users on the importance of recycling and provides
          valuable tips on reducing waste.<br />It has truly
          heightened my awareness of environmental issues"<br /><i>John Smith- a happy user</i>
        </p>
      </div>
      <div className="rectangle">
        <p><u>Why you should sign up</u><br /><br />You have the opportunity to learn more about the environment while also combatting pollution and earning points for completing tasks</p>
      </div>
      <div>
        <p><br /><br /><br /></p>
      </div>
    </div>
);
}

const styles = StyleSheet.create({
    "*": {
      fontFamily:
        "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
      margin: "1",
      padding: "0"
    },
    ".banner": {
      width: "100%",
      height: "100vh",
      backgroundImage: "linear-gradient(rgba(0,0,0,0,75),rgba(0,0,0,0,75))",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    ".nav-links": {
      width: "85%",
      margin: "auto",
      padding: "35px 0",
      display: "flex",
      alignItems: "left",
      justifyContent: "space-between"
    },
    ".modal": {
      display: "none",
      position: "fixed",
      zIndex: 1,
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: ["rgb(0,0,0)", "rgba(0,0,0,0.4)"],
      paddingTop: "60px"
    },
    ".modal-content": {
      backgroundColor: "#fefefe",
      margin: "5px auto",
      border: "1px solid #888",
      width: "80%"
    },
    ".close": {
      position: "absolute",
      right: "25px",
      top: "0",
      color: "#000",
      fontSize: "35px",
      fontWeight: "bold"
    },
    ".close:hover,\n    .close:focus": { color: "red", cursor: "pointer" },
    ".animate": {
      WebkitAnimation: "animatezoom 0.6s",
      animation: "animatezoom 0.6s"
    },
    "@-webkit-keyframes animatezoom": {
      from: { WebkitTransform: "scale(0)" },
      to: { WebkitTransform: "scale(1)" }
    },
    "@keyframes animatezoom": {
      from: { transform: "scale(0)" },
      to: { transform: "scale(1)" }
    },
    ".nav-links ul li": {
      listStyle: "none",
      display: "inline-block",
      margin: "0 20px",
      alignItems: "left"
    },
    ".container": {
      width: "80%",
      padding: "100px",
      backgroundColor: "#ffffff",
      borderRadius: "30%",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: "0 20px 20px rgba(255, 255, 255, 0.2)"
    },
    img: {
      width: "11%",
      objectFit: "fit",
      borderRadius: "80px",
      boxShadow: "0 20px 20px rgba(50,60,60,0.2)",
      marginLeft: "auto",
      marginRight: "auto"
    },
    h1: { textAlign: "center", top: "0px", fontSize: "30px" },
    "h1::after": {
      content: "' '",
      width: "0%",
      height: "2px",
      background: "rgb(105, 174, 105)",
      display: "block",
      margin: "auto",
      transition: "0.5s"
    },
    "h1:hover::after": { width: "100%" },
    p: { textAlign: "center", fontSize: "18px" },
    ".flip-card": {
      position: "relative",
      width: "100%",
      height: "150",
      transformStyle: "preserve-3d",
      transition: "all 0.5s ease-in-out",
      zIndex: 1
    },
    ".flip-card .front,\n    .flip-card .back": {
      position: "absolute",
      width: "100%",
      height: "100%",
      textAlign: "center",
      background: "lightgreen",
      backfaceVisibility: "hidden",
      borderRadius: "0 20px 0 20px"
    },
    ".flip-card .back": {
      transform: "rotateX(180deg)",
      color: "#000",
      background: "lightgreenS"
    },
    "label:hover .flip-card": {
      transform: "rotateX(2deg)",
      boxShadow: "0 20px 20px rgba(50,60,60,0.2)"
    },
    input: { display: "none" },
    ":checked + .flip-card": { transform: "rotateX(180deg)" },
    "label:hover :checked + .flip-card": {
      transform: "rotateX(175deg)",
      boxShadow: "0 20px 20px rgba(255, 255, 255, 0.2)"
    },
    ".front h2": { fontSize: "28px", color: "4e699d", margin: "12px 0 12px 0" },
    ".front b": {
      fontSize: "14px",
      color: "#424752",
      margin: "0 0 35px 0",
      display: "block"
    },
    ".front p,\n.back, .click": { fontSize: "18px", fontWeight: 600 },
    ".back h1": { color: "#424752", margin: "30px 0 0 0" },
    hr: { width: "180px", margin: "15px auto 10px auto" },
    ".back p": {
      fontSize: "16px",
      color: "#000",
      padding: "0 18px",
      lineHeight: "30px",
      textAlign: "center",
      margin: "0 auto"
    },
    ".container3": {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "30px"
    },
    ".section": { backgroundColor: "lightgray", padding: "40px" },
    ".container4": {
      margin: "20 20px",
      height: "300px",
      marginRight: "auto",
      marginLeft: "auto",
      bottom: "auto"
    },
    ".section2": { backgroundColor: "lightgray", padding: "40px" },
    ".section3": { backgroundColor: "rgb(211, 211, 211)", padding: "80px" },
    ".rectangle": {
      width: "1300px",
      height: "70px",
      backgroundColor: "#fffff0",
      alignContent: "center",
      marginRight: "auto",
      marginLeft: "auto"
    }
})
  
export default RegisterScreen;