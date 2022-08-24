import React from 'react'
import profilePic from "../../assets/profile/profile-pic.jpg";

function About() {

  return (
    <section>
      <h2 id="about">About Me</h2>
      <div className='flex'>
        <img src={profilePic} className="profile-pic" /* style={{ width: "100%" }} */ alt="profile" />
        <div className="subwrap">
            <p>
                My name is Jeffry Langford. I currently 25 years old, and I live in Austin, TX. I received my Bachelor's degree in Music Composition and Performance from Baylor University in 2019. I was planning on pursuing a career in music, but had a change of heart once I started my Master's degree at the University of Texas. 
            </p>
            <p>    
                I'm currently attending UT's Coding Bootcamp hoping to start my career in Web Developing and the like.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About