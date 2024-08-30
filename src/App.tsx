// import { useState } from 'react'
import './App.css';
import landingLogo from '/downlow-placeholder.png';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="center-wrap">
        <div className="two-col-wrap">
          <img
            src={landingLogo}
            className="logo"
            alt="The Down Low Club logo"
          />
          <div id="landing-msg">
            <div id="header-txt-wrap">
              <h1>The Down Low Club</h1>
              <p className="accent-text">Find the spots only locals know</p>
            </div>

            <div className="card">
              <p>
                Hey there! I'm building The Down Low Club to help you skip the
                tourist traps and discover local favorites. Whether you’re just
                visiting or making a new place home, I'll send you the best
                under-the-radar spots—no crowds, no clichés. Jump on the
                waitlist and be the first to find out!
              </p>
            </div>

            <div id="form-wrap">
              <input type="text" placeholder="JohnnyHamcheck@hotmail.com" />
              <button>Join the Waitlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
