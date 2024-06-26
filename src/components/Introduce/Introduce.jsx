import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import "aos/dist/aos.css";
import styles from "./Introduce.module.scss";

const cx = classNames.bind(styles);

function Introduce() {
    const [typing, setTyping] = useState({
        cursor: 0,
        typingShow: [0],
    });

    useEffect(() => {
        setTimeout(() => {
            setTyping({ typingShow: [...typing.typingShow, 1], cursor: 1 });
        }, 2200);
    }, []);

    return (
        <div
            id="introduce"
            className={cx("d-flex flex-column align-items-center", "introduce")}
        >
            <h1>HELLO</h1>
            <h3
                className={cx(
                    "typing",
                    typing.typingShow.includes(0) ? "typing-show" : "",
                    typing.cursor === 0 ? "active" : ""
                )}
            >
                My name is <strong>Chu Hoai Nam</strong>
            </h3>
            <h3
                className={cx(
                    "typing",
                    typing.typingShow.includes(1) ? "typing-show" : "",
                    typing.cursor === 1 ? "active" : ""
                )}
            >
                I'm a front-end developer
            </h3>
            <div className={cx("d-flex")}>
                <a
                    data-aos="fade-up"
                    data-aos-delay="2000"
                    data-aos-duration="2000"
                    href="https://www.facebook.com/hoainam151101"
                    className={cx("contact")}
                >
                    <FacebookIcon className={cx("contact-icon")}></FacebookIcon>
                </a>
                <a
                    data-aos="fade-up"
                    data-aos-delay="2200"
                    data-aos-duration="2000"
                    href="https://github.com/HoaiNam1511"
                    className={cx("contact")}
                >
                    <GitHubIcon className={cx("contact-icon")}></GitHubIcon>
                </a>
                <a
                    data-aos="fade-up"
                    data-aos-delay="2400"
                    data-aos-duration="2000"
                    href="https://www.linkedin.com/in/ho%C3%A0i-nam-a46750258/"
                    className={cx("contact")}
                >
                    <LinkedInIcon className={cx("contact-icon")}></LinkedInIcon>
                </a>
            </div>
        </div>
    );
}

export default Introduce;
