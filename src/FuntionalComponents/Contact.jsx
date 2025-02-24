// src/components/Footer.js
import React from "react";
import "../Css/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <h3>Contact Me</h3>
                <p><FontAwesomeIcon icon={faEnvelope} /> Email: rnsaneesh15@gmail.com</p>
                <p><FontAwesomeIcon icon={faPhone} /> Phone: +91 7358409822</p>
            </div>

            <div className="social-links">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
            </div>

            
        </footer>
    );
};

export default Contact;
