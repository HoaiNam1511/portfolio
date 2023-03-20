import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import PlaceIcon from "@mui/icons-material/Place";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const cx = classNames.bind(styles);
function Contact() {
    useEffect(() => {
        Aos.init({ duration: 2000, offset: 100 });
    }, []);
    return (
        <div
            id={cx("contact")}
            className={cx("container-fluid gx-0", "contact")}
        >
            <h1>Contact</h1>
            <div className={cx("row gx-0")}>
                <div
                    className={cx(
                        "col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 d-flex flex-column align-items-center",
                        "contact-block"
                    )}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="2000"
                >
                    <div className={cx("title")}>Call me at</div>
                    <div
                        className={cx(
                            "d-flex align-items-center justify-content-center"
                        )}
                    >
                        <PhoneInTalkIcon className={cx("icon")} />
                        <div className={cx("title-1")}>0333839814</div>
                    </div>
                </div>
                <div
                    className={cx(
                        "col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 d-flex flex-column align-items-center",
                        "contact-block"
                    )}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                >
                    <div className={cx("title")}>My location</div>
                    <div
                        className={cx(
                            "d-flex align-items-center justify-content-center"
                        )}
                    >
                        <PlaceIcon className={cx("icon")} />
                        <div className={cx("title-1")}>Ha Noi, Viet Nam</div>
                    </div>
                </div>
                <div
                    className={cx(
                        "col-12 col-xxl-4 col-xl-4 col-lg-4 col-md-4 d-flex flex-column align-items-center",
                        "contact-block"
                    )}
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="2000"
                >
                    <div className={cx("title")}>Send mail for me</div>
                    <div
                        className={cx(
                            "d-flex align-items-center justify-content-center"
                        )}
                    >
                        <MailIcon className={cx("icon")} />
                        <div className={cx("title-1")}>
                            chuhoainam00@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
