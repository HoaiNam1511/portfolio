import styles from "./About.module.scss";
import classNames from "classnames/bind";
import avatar from "../../asset/image/avt1.png";
import cv from "../../asset/file/CV-ChuHoaiNam-Intern.pdf";
import DownloadIcon from "@mui/icons-material/Download";

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx("container-fluid gx-0", "about")}>
            <div className={cx("background-shadow")}>
                <h1>About</h1>
                <div className={cx("row gx-0")}>
                    <div className={cx("col-4 text-center")}>
                        <img
                            className={cx("about-image")}
                            src={avatar}
                            alt=""
                        />
                    </div>
                    <div className={cx("col-8", "about-content")}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Rem quod fugit blanditiis est dolores unde ab et
                        excepturi, eligendi, natus sequi? Nam, accusantium.
                        Consequuntur tempore blanditiis ullam nemo recusandae
                        et.
                        <a href={cv} download>
                            <button className={cx("btn-download")}>
                                Download CV
                                <DownloadIcon className={cx("icon")} />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
