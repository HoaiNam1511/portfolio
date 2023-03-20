import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { useEffect } from "react";
import { useState } from "react";

const cx = classNames.bind(styles);
function Header() {
    const [scrollTop, setScrollTop] = useState(0);
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
            <nav className={cx("row gx-0 d-flex align-items-end", "nav")}>
                <h2
                    className={cx(
                        "col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                        "logo"
                    )}
                >
                    {`<Hoai Nam />`}
                </h2>
                <ul
                    className={cx(
                        "col-12 col-xxl-6 col-xl-6 col-lg-6 col-md-6 d-none d-lg-block ",
                        "nav-list"
                    )}
                >
                    <li className={cx("nav-item")}>Home</li>
                    <li className={cx("nav-item")}>About</li>
                    <li className={cx("nav-item")}>Skill</li>
                    <li className={cx("nav-item")}>Project</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
