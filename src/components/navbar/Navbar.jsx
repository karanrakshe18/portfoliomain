import "./navbar.scss";
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import PopUp from "../pop-up/PopUp";
import { useState } from "react";

const Navbar = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleLinkClick = (e) => {
        e.preventDefault();
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleConfirmDownload = () => {
        setModalOpen(false);
        window.location.href = 'Karan Resume 1.pdf';
    };


    return (
        <div className="navbar">
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial = {{opacity : 0, scale : 0.5}} animate = {{opacity : 1, scale : 1}} transition = {{duration:0.5}}>Karan Rakshe</motion.span>
                <div className="social">
                    <a href="https://www.linkedin.com/in/Karan-Rakshe/"><img src="linkedin.png" alt="" /></a>
                    <a href="https://github.com/karanrakshe18"><img src="github.png" alt="" /></a>
                    <a href="https://x.com/karanrakshe18"><img src="twitter.png" alt="" /></a>
                    <a href="/Karan Resume 1.pdf" download onClick={handleLinkClick}><img src="resume.png" alt="" /></a>
                    <PopUp isOpen={isModalOpen} onClose={handleCloseModal} onConfirm={handleConfirmDownload} />
                </div>
            </div>
        </div>
    )
}

export default Navbar