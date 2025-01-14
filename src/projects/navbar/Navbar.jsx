import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./img/logo.svg";

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleMenu = () => {
        // console.log(linksRef.current.getBoundingClientRect());
        setShowLinks(!showLinks);
    }

    const linkStyle = {
        height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : "0px"
    }

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="logo" />
                    <button className="nav-toggle" onClick={toggleMenu} >
                        <FaBars />
                    </button>
                </div>

                <div className="links-container" ref={linksContainerRef} style={linkStyle}>
                    <ul className="links" ref={linksRef}>
                        {
                            links.map((link, index) => {
                                return (
                                    <li key={index}>
                                        <a href={link.url}>{link.text}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <ul className="social-icons">
                    {
                        social.map((sIcon) => {
                            return (
                                <li key={sIcon.id}>
                                    <a href={sIcon.url}>{sIcon.icon}</a>
                                </li>
                            )
                        })
                    }
                </ul>

                {/* {
                    showLinks && (
                        <div className="links-container">
                            <ul className="links">
                                {
                                    links.map((link, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={link.url}>{link.text}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                }                 */}
            </div>
        </nav>
    )
}

export default Navbar;
