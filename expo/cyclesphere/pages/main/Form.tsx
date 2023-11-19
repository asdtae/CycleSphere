import React, { FC } from 'react';

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

export default RegisterScreen;