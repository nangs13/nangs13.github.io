import React, { useState, useEffect } from "react";
import { Image, Tag } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Import Image
import gameSuit from "../assets/img/Projects/game-suit.jpg";
import kontrolBiaya from "../assets/img/Projects/kontrol-biaya.png";
import accelERP from "../assets/img/Projects/accel-erp.jpg";
import trackrWeb from '../assets/img/Projects/trackr-web.jpg';
import trakcrMobile from "../assets/img/Projects/trackr-mobile.jpg";
import holirent from "../assets/img/Projects/holirent.jpg";
import warehouseErp from "../assets/img/Projects/warehouse.jpg";
import salesErp from "../assets/img/Projects/sales.jpg";
import prcurementErp from "../assets/img/Projects/procurement.jpg";
import accountingErp from "../assets/img/Projects/accounting.jpg";

const Projects = () => {
  const [currIdx, setCurrIdx] = useState(0);

  const projects = [
    {
      project_name: "Accounting Modul of Interbiss ERP",
      project_tag: "ReactJS,NodeJS,Bootstrap,Graphql",
      project_desc: "An Accounting Modul of Interbiss ERP",
      peran: "Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: accountingErp,
    },
    {
      project_name: "Sales Modul of Interbiss ERP",
      project_tag: "ReactJS,NodeJS,Bootstrap,Graphql",
      project_desc: "A Sales Modul of Interbiss ERP",
      peran: "Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: salesErp,
    },
    {
      project_name: "Procurement Modul of Interbiss ERP",
      project_tag: "ReactJS,NodeJS,Bootstrap,Graphql",
      project_desc: "A Procurement Modul of Interbiss ERP",
      peran: "Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: prcurementErp,
    },
    {
      project_name: "Warehouse Modul of Interbiss ERP",
      project_tag: "ReactJS,NodeJS,Bootstrap,Graphql",
      project_desc: "A Warehouse Modul of Interbiss ERP",
      peran: "Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: warehouseErp,
    },
    {
      project_name: "Kontrol Biaya",
      project_tag: "ReactJS,NodeJS,Bootstrap,Electron",
      project_desc: "A Desktop Application of ERP Application",
      peran:
        "Building The Apps, Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: kontrolBiaya,
    },
    {
      project_name: "AccelERP",
      project_tag: "ReactJS,NodeJS,Bootstrap",
      project_desc: "A Website Application of ERP",
      peran:
        "Building The Apps, Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: accelERP,
    },
    {
      project_name: "Trackr",
      project_tag: "Laravel,VueJS,Bootstrap",
      project_desc:
        "A Website Application That Specialize in Tracking Truck and Maintain Truck",
      peran: "Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: trackrWeb,
    },
    {
      project_name: "Sales App Mobile",
      project_tag: "Kotlin",
      project_desc: "A Mobile App for Sales Modul of Interbiss ERP",
      peran: "Adding New Feature And Maintain the Application",
      category: "Professional Project",
      image: "",
    },
    {
      project_name: "Trackr App Mobile",
      project_tag: "Kotlin",
      project_desc: "A Mobile App of Trackr for Driver to Update Their Status",
      peran: "Maintain the Application",
      category: "Professional Project",
      image: trakcrMobile,
    },
    {
      project_name: "GameSuit",
      project_tag: "Kotlin",
      project_desc: "A Simple Rock paper scissors Game, Build Using Kotlin",
      peran: "Building The Apps",
      category: "Practice Project",
      image: gameSuit,
    },
    {
      project_name: "Holirent",
      project_tag: "Laravel,Bootstrap",
      project_desc:
        "A Website Application For Renting Bus, It's a School Project",
      peran: "Building The Apps",
      category: "School Project",
      image: holirent,
    },
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        nextSlide();
      }, 5000);
  
      return () => {
        clearTimeout(timeoutId);
      };
  },[currIdx])

  const nextSlide = () => {
    const lastIndex = projects.length - 1;
    const shouldResetIndex = currIdx === lastIndex;
    const index = shouldResetIndex ? 0 : currIdx + 1;
    console.log("Next");

    setCurrIdx(index);
  };

  const prevSlide = () => {
    const lastIndex = projects.length - 1;
    const shouldResetIndex = currIdx === 0;
    const index = shouldResetIndex ? lastIndex : currIdx - 1;

    setCurrIdx(index);
  };

  console.log("Current Index = ", currIdx);

  return (
    <>
      <div
        id="projects"
        className="carousel"
        style={{ display: "flex", width: "100%", flexDirection: "row" }}
      >
        {[...projects, ...projects].map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currIdx ? "active" : ""} ${
              index < currIdx ? "hidden" : ""
            }`}
          >
            <Image src={project.image} alt={project.project_name} />
            {/* <img src={project.image} alt={project.project_name} /> */}
            <div style={{ flexDirection: "row", margin: "5px" }}>
              <Tag
                bordered={true}
                color={
                  project.category == "Professional Project" ? "gold-inverse" :
                  project.category == "Practice Project" ? "magenta-inverse" :
                    "lime-inverse"
                }
              >
                {project.category}
              </Tag>
              {project.project_tag.split(",").map((it) => {
                return (
                  <Tag
                    bordered={true}
                    color={
                      it == "ReactJS"
                        ? "cyan-inverse"
                        : it == "Laravel"
                        ? "orange-inverse"
                        : it == "Kotlin"
                        ? "blue-inverse"
                        : it == "Bootstrap"
                        ? "purple-inverse"
                        : it == "NodeJS"
                        ? "green-inverse"
                        : it == "VueJS"
                        ? "green"
                        : it == "Electron"
                        ? "geekblue-inverse"
                        : "processing"
                    }
                  >
                    {it}
                  </Tag>
                );
              })}
            </div>
            <h3>{project.project_name}</h3>
            <p style={{marginTop: "-30px"}}>{project.project_desc}</p>
            <h4>Role</h4>
            <p style={{marginTop: "-30px"}}>{project.peran}</p>
          </div>
        ))}
        <button className="prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} size="2xl" />
        </button>
        <button className="next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} size="2xl" />
        </button>
      </div>
    </>
  );
};

export default Projects;
