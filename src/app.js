import React from "react";
import { FloatButton, Progress } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCircleInfo, faX } from "@fortawesome/free-solid-svg-icons";

// Import Component
import Header from "./components/header";
import Projects from "./components/projects";
import people from "./assets/img/people.webp"

const App = () => {

    return (
        <>
        <Header />
        {/* Perkenalan / About Me */}
        <div id="about" className="container top header-background" style={{height: "500px"}}>
            <div>
                <img src={people} alt="Ini Gambar" className="img-head"></img>
            </div>
            <div style={{paddingRight: "40px"}}>
                <h3>Hi!!, My name is Danang Wahyu Nugroho</h3>
                <h5>I'm a FullStack Web Developer</h5>
                <p>
                As a Fullstack web developer with 3 years of experience, I specialize in building React applications. 
                My core competency lies in end-to-end complete management of new project development, 
                with a focus on custom-tailored apps and services for businesses. I already make 3+ project involving ERP System, 
                so i confident of my knowledge about ERP System.
                </p>
            </div>
        </div>

        {/* Keahlian / Skill */}
        <div id="skill" className="container" style={{flexDirection: "column", minHeight: "600px"}}>
            <h2>Skills</h2>
            <div className="card">
                <ul className="list">
                    <li className="list-item"><span>ReactJS</span><Progress percent={80} showInfo={false}/><span>80%</span></li>
                    <li className="list-item"><span>NodeJS</span><Progress percent={70} showInfo={false}/><span>70%</span></li>
                    <li className="list-item"><span>ElectronJS</span><Progress percent={65} showInfo={false}/><span>65%</span></li>
                    <li className="list-item"><span>Laravel</span><Progress percent={70} showInfo={false}/><span>70%</span></li>
                    <li className="list-item"><span>Kotlin</span><Progress percent={40} showInfo={false}/><span>40%</span></li>
                    <li className="list-item"></li>
                    <li className="list-item"><span>Other than what above i have other skill such as Knowing Git Command, Know Flow of ERP System, and many more.</span></li>
                </ul>
            </div>
        </div>

        <div id="Project" className="container bottom-triangle" style={{color: "white",minHeight: "500px", marginTop: "20px",flexDirection: "column",backgroundColor: "#222831"}}>
            <br />
            <h2>Project </h2>
            <Projects />
        </div>

        <div id="contact" className="container" style={{position: "relative"}}>
            <div>
                <h2>Contact Me</h2>
                <p style={{position: "absolute", bottom: "0"}}>Copyright &copy; 2023 Danang</p>
            </div>
            <div>
                <h4>You can contact me in this social media</h4>
                <div style={{flexDirection: "row"}}>
                <button className="btn-contact"><FontAwesomeIcon icon={faWhatsapp} size="2xl"/></button>
                <button className="btn-contact" onClick={() => navi}><FontAwesomeIcon icon={faLinkedin} size="2xl"/></button>
                <button className="btn-contact"><FontAwesomeIcon icon={faFacebook} size="2xl"/></button>
                <button className="btn-contact"><FontAwesomeIcon icon={faInstagram} size="2xl"/></button>
                <button className="btn-contact"><FontAwesomeIcon icon={faX} size="2xl"/></button>
                </div>
            </div>
        </div>


        <FloatButton.Group shape="circle" trigger="hover" tooltip="Informasi" icon={<FontAwesomeIcon icon={faCircleInfo} />}>
            <FloatButton icon={<FontAwesomeIcon icon={faWhatsapp} />} tooltip="Whatsapp"/>
            <FloatButton.BackTop visibilityHeight={1} />
        </FloatButton.Group>
        </>
    )
}

export default App;