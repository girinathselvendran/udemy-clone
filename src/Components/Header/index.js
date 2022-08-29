import React from 'react'
import './header.css'

const Header = () => {

  return (
    <div>

      <header>
        <div className='headerSection'>
          <section>
            <img width={"60px"} height="60px" src='https://www.logolynx.com/images/logolynx/1a/1a758617ff98abec74dd6cfcce275172.jpeg' alt='logo' />
          </section>
          <section>
            <input className='searchInput' type="search" id="gsearch" name="gsearch" />
            <button className='searchbtn'>search</button>
          </section>
          <section /*style={{ marginLeft: "auto", marginRight: "2%" }} */>
            <button className='headerBtn login-btn'>
              Log in
            </button>

            <button className='headerBtn signup-btn'>
              Sign up
            </button>
          </section>
        </div>

      </header>
    </div>
  )
}

export default Header