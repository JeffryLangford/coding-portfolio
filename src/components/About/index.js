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
              From an early age, I have found various ways to express creativity. 
              My creative outlets during elementary school were drawing colorful pictures, building with Legos, and playing the piano and video games. 
              As I moved into junior high, I discovered that I had a natural talent for arranging and composing music with Finale software alongside 
              taking private lessons while learning to play the double bass. 
              I excelled in STEM subjects throughout my academic career, with my favorite ones being Physics and Calculus. 
              My passion for playing and composing music continued to grow leading me to complete a Bachelor's degree 
              in Music Composition and Performance from Baylor University in 2019.  
            </p>
            <p>    
              After beginning a master's program in composition at The University of Texas, I felt that I needed to pursue something besides music, especially 
              when that industry was negatively affected during the COVID-19 pandemic. 
              So I enrolled and completed an online 6-month Coding Bootcamp in 2022 through The University of Texas, Austin to learn about developing and designing websites. 
              I learned many skills and software languages such as HTML, Javascript, JQuery, Express, MongoDB, Tailwind, and Node, just to name a few. 
              Today, I continue to be an active and integral member of RPG (role-playing games) teams which helped me to work and communicate well on team projects during the boot camp. 
              I've also discovered that I am an effective trainer in my current job at Soto, a high-end Japanese sushi restaurant here in Austin.
            </p>
            <p>
              I'm looking to pursue a career using my creativity, analytical, training, and coding skills as a Web Developer and/or Designer.
            </p>
        </div>
      </div>
    </section>
  )
}

export default About