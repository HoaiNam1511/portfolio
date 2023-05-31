import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useEffect } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";

import "aos/dist/aos.css";
import Aos from "aos";

const cx = classNames.bind(styles);
function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000, offset: 100 });
    }, []);

    const infoData = [
        {
            title1: "Phone",
            title2: "0333839814",
            icon: PhoneInTalkIcon,
        },
        {
            title1: "Email",
            title2: "chuhoainam00@gmail.com",
            icon: MailIcon,
        },
        {
            title1: "Address",
            title2: "Ha Noi, Viet Nam",
            icon: PlaceIcon,
        },
    ];

    const networkData = [
        {
            icon: FacebookIcon,
            url: "https://www.facebook.com/hoainam151101",
        },
        {
            icon: InstagramIcon,
            url: "https://www.instagram.com/hoainam9618",
        },
        {
            icon: TwitterIcon,
            url: "https://twitter.com/hoainamit",
        },
    ];

    return (
        <div
            id={cx("contact")}
            className={cx("container-fluid gx-0", "contact")}
        >
            <h1 className={cx("header-title")}>Contact</h1>
            <div className={cx("row gx-0", "contact-background")}>
                <div
                    className={cx(
                        "col-12 col-lg-6",
                        "left-content"
                    )}
                >
                    <h1 className={cx("info-header")}>Get in touch</h1>
                    <h3 className={cx("info-title")}>
                        I am always open to discussing new projects, creative
                        ideas or opportunities to be part of your visions.
                    </h3>
                    <div className={cx("info-container")}>
                        {infoData.map((item, index) => (
                            <div className={cx("d-flex align-items-center")}>
                                <item.icon className={cx("icon")} />
                                <div className={cx("info-item")}>
                                    <h5 className={cx("title-1")}>
                                        {item.title1}
                                    </h5>
                                    <p className={cx("title-2")}>
                                        {item.title2}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className={cx(
                            "d-flex justify-content-center",
                            "network-container"
                        )}
                    >
                        {networkData.map((item, index) => (
                            <div className={cx("network-item")}>
                                <a href={item.url}>
                                    <item.icon className={cx("network-icon")} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    className={cx(
                        "col-12 col-lg-6 d-flex justify-content-center",
                        "right-content"
                    )}
                >
                    <form className={cx("form")}>
                        <div className={cx("contact-form")}>
                            <label className={cx("input-label")} htmlFor="">
                                Your Name
                            </label>
                            <div className={cx("d-flex", "input")}>
                                <div
                                    className={cx(
                                        "d-flex justify-content-center align-items-center",
                                        "icon-container"
                                    )}
                                >
                                    <PersonIcon className={cx("input-icon")} />
                                </div>
                                <input type="text" placeholder="Name" />
                            </div>
                        </div>
                        <div className={cx("contact-form")}>
                            <label className={cx("input-label")} htmlFor="">
                                Email
                            </label>
                            <div className={cx("d-flex", "input")}>
                                <div
                                    className={cx(
                                        "d-flex justify-content-center align-items-center",
                                        "icon-container"
                                    )}
                                >
                                    <MailIcon className={cx("input-icon")} />
                                </div>
                                <input type="text" placeholder="Email" />
                            </div>
                        </div>
                        <div className={cx("contact-form")}>
                            <label className={cx("input-label")} htmlFor="">
                                Message
                            </label>

                            <textarea
                                className={cx("text-aria")}
                                type="text"
                                placeholder="Message"
                            />
                        </div>

                        <button
                            type="button"
                            className={cx("btn btn-primary", "btn-submit")}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className={cx("author")}>
                © 2023 ChuHoaiNam. All rights reserved.
            </div>
        </div>
    );
}

export default Contact;
