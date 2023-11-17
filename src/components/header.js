import React from "react";

const Header = () => {
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="nav-header">
        <p className="logo-web">Hi, I'm Danang Wahyu Nugroho</p>
        <ul className="nav-list">
          <li className="nav-item">
            {/* <a href="#about">About Me</a> */}
            <button onClick={() => smoothScroll('about')}>About Me</button>
          </li>
          <li className="nav-item">
            {/* <a href="#skill">Skill</a> */}
            <button onClick={() => smoothScroll('skill')}>Skill</button>
          </li>
          <li className="nav-item">
            {/* <a href="#project">Project</a> */}
            <button onClick={() => smoothScroll('projects')}>Projects</button>
          </li>
          <li className="nav-item">
            {/* <a href="#contact">Contact</a> */}
            <button onClick={() => smoothScroll('contact')}>Contact</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
