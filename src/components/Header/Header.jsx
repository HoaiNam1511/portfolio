import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EditIcon from "@mui/icons-material/Edit";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";

const cx = classNames.bind(styles);
function Header() {
    const [scrollTop, setScrollTop] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);

    const navList = [
        {
            title: "Home",
            icon: HomeIcon,
        },
        {
            title: "About",
            icon: PersonIcon,
        },
        {
            title: "Skills",
            icon: EditIcon,
        },
        {
            title: "Portfolio",
            icon: WorkIcon,
        },
        {
            title: "Contact",
            icon: PhoneIcon,
        },
    ];

    useEffect(() => {
        const handleScroll = (event) => {
            setScrollTop(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={cx("container-fluid gx-0", "header", {
                "active-shadows": scrollTop > 0,
            })}
        >
            <nav
                className={cx(
                    "row gx-0 d-flex align-items-center justify-content-between",
                    "nav"
                )}
            >
                <p
                    className={cx(
                        "col-8 col-xxl-6 col-xl-6 col-lg-6 col-md-10 d-flex",
                        "logo"
                    )}
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
                    className={cx(
                        "col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                        "nav-list",
                        { "nav-list_active": menuOpen }
                    )}
                >
                    {navList.map((item, index) => (
                        <li
                            key={index}
                            className={cx(
                                "d-flex align-items-center",
                                "nav-item"
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
