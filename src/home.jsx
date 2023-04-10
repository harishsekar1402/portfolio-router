import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='portfolio'>
        <h1 className='title'>
          Hi, I'm Harish S
        </h1>
        <div className='about'>
          <h1>About Me</h1>
          <h3>Student and Developer</h3>
        </div>
        <div className='icons'>
        <a href='https://www.linkedin.com/in/harish-sekar-369506201/'><img src='https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png' alt='logo'></img></a>
          <a href='https://github.com/harishsekar1402'><img className='git' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='logo'></img></a>
          <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="tweet" />
        </div>
    </div>
  )
}

export default Home