import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef } from "react";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import "aos/dist/aos.css";

const cx = classNames.bind(styles);
function Header() {
    const [scrollTop, setScrollTop] = useState(10);
    const [menuOpen, setMenuOpen] = useState(false);
    const [touchOpen, setTouchOpen] = useState(false);
    const [touchActive, setTouchActive] = useState(false);

    const refTouchList = useRef();

    const navList = [
        {
            title: "Home",
            icon: HomeIcon,
            offset: 0,
            id: "introduce",
        },
        {
            title: "About",
            icon: PersonIcon,
            offset: 550,
            id: "about",
        },
        {
            title: "Skills",
            icon: EditIcon,
            offset: 1400,
            id: "skill",
        },
        {
            title: "Portfolio",
            icon: WorkIcon,
            offset: 1890,
            id: "portfolio",
        },
        {
            title: "Contact",
            icon: PhoneIcon,
            offset: 2500,
            id: "contact",
        },
    ];

    const [currentElement, setCurrentElement] = useState(0);
    const [currentPosition, setCurrentPosition] = useState(navList[0]);

    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [menuOpen]);

    useEffect(() => {
        let timer1;
        if (!touchOpen) {
            timer1 = setTimeout(() => {
                setTouchActive(true);
            }, 5000);
        }

        return () => {
            clearTimeout(timer1);
        };
    }, [touchOpen]);

    const handleNavClick = (item, index) => {
        const element = document.getElementById(item.id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
            });
        }
        setCurrentElement(index);
        setTouchOpen(false);
        setTouchActive(false);
        setMenuOpen(false);
    };

    return (
        <div
            className={cx("container-fluid gx-0", "header", {
                "active-shadows": scrollTop > 0,
            })}
        >
            <div
                className={cx("d-block d-lg-none", "touch", "touch-main", {
                    "touch-active": touchActive,
                })}
                onClick={() => setTouchOpen(true)}
            >
                <currentPosition.icon
                    className={cx("d-block d-lg-none", "touch-icon")}
                />
            </div>

            <div
                ref={refTouchList}
                className={cx(
                    "d-block d-lg-none",
                    "touch-container",
                    touchOpen ? "d-block" : "d-none"
                )}
            >
                <ul className={cx("list-touch")}>
                    {navList.map((item, index) => (
                        <li
                            data-aos={touchOpen ? "fade-right" : ""}
                            key={index}
                            className={cx("touch")}
                            onClick={() => handleNavClick(item, index)}
                        >
                            <item.icon
                                className={cx(
                                    "d-block d-lg-none",
                                    "touch-icon"
                                )}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            {/* Nav */}
            <nav
                className={cx(
                    "row gx-0 d-flex align-items-center justify-content-between",
                    "nav"
                )}
            >
                <p
                    className={cx("col-8 col-lg-6 col-md-10 d-flex", "logo")}
                    onClick={() => window.scrollTo(0, 0)}
                >{`<Hoai Nam />`}</p>

                <div
                    className={cx(
                        "col-4 d-flex justify-content-end d-lg-none",
                        "menu-btn",
                        {
                            "menu-open": menuOpen,
                        }
                    )}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div
                        className={cx("d-block d-lg-none", "menu-btn_burger")}
                    ></div>
                </div>

                <ul
                    className={cx("col-12 col-md-6", "nav-list", {
                        "nav-list_active": menuOpen,
                    })}
                >
                    {navList.map((item, index) => (
                        <li
                            onClick={() => handleNavClick(item, index)}
                            key={index}
                            className={cx(
                                "d-flex align-items-center",
                                "nav-item",
                                { active: currentElement === index }
                            )}
                        >
                            <item.icon
                                className={cx("d-block d-lg-none", "nav-icon")}
                            />
                            {item.title}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
