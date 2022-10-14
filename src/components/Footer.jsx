import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";

const Footer = () => {
 
    return (
        <footer className="footer">
        <nav>
            <ul>
                <li>
                    <a href="https://github.com/DevShikzia" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sanchez-matias/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/__matt.s__/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                </li>
            </ul>
        </nav>
        <p>	shikzia - 2022</p>
    </footer>
    )
}

export default Footer;