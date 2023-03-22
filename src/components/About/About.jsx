import styles from "./About.module.scss";
import classNames from "classnames/bind";
import avatar from "../../asset/image/avt1.png";
import cv from "../../asset/file/CV-ChuHoaiNam-Intern.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SchoolIcon from "@mui/icons-material/School";

const cx = classNames.bind(styles);

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const listQualification = [
        {
            title1: "Knowledge",
            title2: "Ha Long University",
            title3: "2019 - 2023",
            icon: CalendarMonthIcon,
        },
        {
            title1: "Major",
            title2: "Computer Science",
            title3: "GPA: 3.05",
            icon: ImportContactsIcon,
        },
        {
            title1: "Award",
            title2: "Scholarship",
            title3: "3 times",
            icon: SchoolIcon,
        },
    ];

    return (
        <div id={cx("about")} className={cx("container-fluid gx-0", "about")}>
            <h1>About</h1>
            <h3 className={cx("title-1")}>Introduce</h3>
            <div className={cx("row g-0")}>
                <div
                    className={cx(
                        "col-4 col-xxl-5 col-xl-5 col-lg-5 col-md-5 text-end"
                    )}
                >
                    <img className={cx("about-image")} src={avatar} alt="" />
                </div>
                <div
                    className={cx(
                        "col-8 col-xxl-7 col-xl-7 col-lg-7 col-md-7",
                        "about-content"
                    )}
                >
                    My name is Nam, i am eager to become a professional
                    front-end developer. I have knowledge HTML, CSS, Javascript,
                    ReactJs, Responsive and i can working backend with NodeJs
                    (ExpressJs, Sequelize). I always proactive and independent
                    in work but willing to be supportive, open-minded in
                    teamwork and learn more about new technologies and improve
                    my programming skills.
                    <a href={cv} download>
                        <button className={cx("btn-download")}>
                            Download CV
                            <DownloadIcon className={cx("icon")} />
                        </button>
                    </a>
                </div>
            </div>

            <h3 className={cx("title-2")}>Education</h3>
            <div className={cx("qualification")}>
                {listQualification.map((item, index) =>
                    index % 2 === 0 ? (
                        <div
                            className={cx("d-flex", "qualification-item")}
                            data-aos="fade-up-right"
                        >
                            <div className={cx("qualification-data")}>
                                <h4 className={cx("title", "title-left")}>
                                    {item.title1}
                                </h4>
                                <h4 className={cx("title", "title-left")}>
                                    {item.title2}
                                </h4>
                                <h4 className={cx("title", "title-left")}>
                                    <item.icon
                                        className={cx("qualification-icon")}
                                    />
                                    {item.title3}
                                </h4>
                            </div>
                            <div className={cx("qualification-line")}></div>
                            <div className={cx("qualification-data")}></div>
                        </div>
                    ) : (
                        <div
                            className={cx("d-flex", "qualification-item")}
                            data-aos="fade-up-left"
                        >
                            <div className={cx("qualification-data")}></div>
                            <div className={cx("qualification-line")}></div>
                            <div className={cx("qualification-data")}>
                                <h4 className={cx("title")}>{item.title1}</h4>
                                <h4 className={cx("title")}>{item.title2}</h4>
                                <h4 className={cx("title")}>
                                    <item.icon
                                        className={cx("qualification-icon")}
                                    />
                                    {item.title3}
                                </h4>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default About;
