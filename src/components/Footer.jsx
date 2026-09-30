import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer(){
    return (
        <footer className="nav-footer">
            <div className="social-icons">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub />
                </a>
            </div>
            <small>&copy; Zohir Aliliche development. All rights reserved</small>
        </footer>
    )
}