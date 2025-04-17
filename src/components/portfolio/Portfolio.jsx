import { useRef } from "react";
import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id : 1,
        title : "Hospital Management System",
        img : "hospital.jpg",
        desc : "The Hospital Management System is a C++ console-based application designed to efficiently manage hospital operations such as patient and doctor records, and appointment scheduling. This system demonstrates Object-Oriented Programming principles and file handling to simulate real-world data management in a medical environment.",
        
    },
    {
        id : 2,
        title : "Heart Disease Prediction",
        img : "heart.jpg",
        desc : "The Heart Disease Prediction System is a machine learning-based classification project that analyzes patient health data to predict the likelihood of heart disease. Built with Python, it utilizes popular ML algorithms to provide predictive insights that can assist medical professionals in early diagnosis and risk assessment.",
        
    },
    {
        id : 3,
        title : "E-Commerce Shopping Website",
        img : "ecommerce.png",
        desc : "The MERN Stack Shopping App is a full-featured e-commerce platform built using the MERN stack. The application supports both user and admin functionalities, providing a smooth shopping experience with secure user authentication and product management.",
        

    },
    {
        id : 4,
        title : "Autonomous navigation system for UGVs",
        img : "ugv.png",
        desc : "The Unmanned Ground Vehicle (UGV) is a smart robotic system developed for autonomous or semi-autonomous ground navigation with a focus on landmine detection, route mapping, and obstacle avoidance. This final-year engineering project showcases an integration of robotics, sensor data processing, embedded systems, and intelligent path planning."
    }
]


const Single = ({item}) => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target : ref})
    const y = useTransform(scrollYProgress, [0,1], [-300, 300])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src = {item.img} alt=""  ref={ref}/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target : ref, offset : ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping : 30
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style= {{scaleX: scaleX}}>

            </motion.div>
        </div>
        {
            items.map(item => (<Single item = {item} key = {item.id}/>))
        }
    </div>
  )
}

export default Portfolio