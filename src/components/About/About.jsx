import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DownloadIcon from "@mui/icons-material/Download";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import SchoolIcon from "@mui/icons-material/School";
import Aos from "aos";
import "aos/dist/aos.css";
import classNames from "classnames/bind";
import { useEffect } from "react";

import cv from "../../asset/file/ChuHoaiNam-Fresher.pdf";
import avatar from "../../asset/image/avt1.jpg";
import styles from "./About.module.scss";

const cx = classNames.bind(styles);

function About() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
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
            title3: "GPA: 3.11",
            icon: ImportContactsIcon,
        },
        {
            title1: "Award",
            title2: "Scholarship",
            title3: "4 times",
            icon: SchoolIcon,
        },
    ];

    return (
        <div
            id="about"
            className={cx("container-fluid gx-0", "about")}
        >
            <h1>About</h1>
            <h3 className={cx("title-1")}>Introduce</h3>
            <div className={cx("row g-0")}>
                <div className={cx("col-12 col-sm-5 text-sm-end")}>
                    <img
                        className={cx("about-image")}
                        src={avatar}
                        alt=""
                    />
                </div>

                <div className={cx("col-12 col-sm-7", "about-content")}>
                    <div className={cx("content")}>
                        My name is Nam, I am a frontend developer with over 1
                        years of experience in the eld of web development,
                        specializing in
                        <strong> ReactJS</strong> and <strong>NextJs</strong>.
                        Additionally, I have a background in backend programming
                        using <strong>NodeJs</strong> with
                        <strong> ExpressJs</strong> (Sequelize). I am proactive
                        and independent in my work, but I am also willing to be
                        supportive and open-minded in teamwork. I am constantly
                        seeking opportunities to learn more about new
                        technologies and improve my programming skills.
                    </div>
                    <a
                        href={cv}
                        download
                    >
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
                            key={index}
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
                            key={index}
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
