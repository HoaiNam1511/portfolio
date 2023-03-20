import styles from "./About.module.scss";
import classNames from "classnames/bind";
import avatar from "../../asset/image/avt1.png";
import cv from "../../asset/file/CV-ChuHoaiNam-Intern.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div
            id={cx("about")}
            className={cx("container-fluid gx-0", "about")}
            data-aos="fade-down"
        >
            <h1>About</h1>
            <div className={cx("row g-0")}>
                <div
                    className={cx(
                        "col-4 col-xxl-6 col-xl-6 col-lg-6 col-md-6 text-center"
                    )}
                >
                    <img className={cx("about-image")} src={avatar} alt="" />
                </div>
                <div
                    className={cx(
                        "col-8 col-xxl-6 col-xl-6 col-lg-6 col-md-6",
                        "about-content"
                    )}
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem quod fugit blanditiis est dolores unde ab et excepturi,
                    eligendi, natus sequi? Nam, accusantium. Consequuntur
                    tempore blanditiis ullam nemo recusandae et. fugit
                    blanditiis est dolores unde ab et excepturi, eligendi, natus
                    sequi? Nam, accusantium. Consequuntur tempore blanditiis
                    ullam nemo recusandae et.
                    <a href={cv} download>
                        <button className={cx("btn-download")}>
                            Download CV
                            <DownloadIcon className={cx("icon")} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;
