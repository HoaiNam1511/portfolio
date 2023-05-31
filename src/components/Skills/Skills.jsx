import styles from "./Skills.module.scss";
import classNames from "classnames/bind";
import { listLogo } from "../../data/logo.jsx";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const cx = classNames.bind(styles);

function Skills() {
    return (
        <div
            className={cx(
                "container-fluid gx-0 d-flex flex-column align-items-center",
                "skill"
            )}
            data-aos="fade-right"
        >
            <h1>SKILLS</h1>
            <ul
                className={cx("row gx-0 f-flex justify-content-center", "list")}
            >
                {listLogo.map((item, index) => (
                    <li className={cx("col-4 col-lg-2 col-sm-3", "item")}>
                        <div className={cx("item-background")}>
                            <img
                                src={item?.logo}
                                alt=""
                            />
                        </div>
                        <div className={cx("tooltip")}>
                            <span>{item.title}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
