import React from 'react';
import coverImage from "../../assets/cover/cover-imagemtv.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>
                My name is Cher Fogerty. For 23 years I worked as a Broadcast Engineer for KSDK TV in St. Louis MO.
                In December of 2020 I was laid off due to automation, basically my job went to Charlotte NC without me.
                At that point I decided it was time to learn a new skill and in came computer coding and web design.
                Although I have to admit my true passion still lies in video production, editing and creating art through 
                graphic design.I also have a passion for a music and have been fortunate enough to be able to use my 
                creative skills to do some PR/Marketing work for Country singer Lorrie Morgan and her restaurant in 
                Panama City Beach Florida as her Social Media Manager.
                </p>
            </div>
        </section>
    
    );
}

export default About;