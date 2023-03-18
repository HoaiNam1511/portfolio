import styles from "./Skills.module.scss";
import classNames from "classnames/bind";
import { listLogo } from "../../data/logo.jsx";
const cx = classNames.bind(styles);

function Skills() {
    return (
        <div
            className={cx(
                "container-fluid gx-0 d-flex flex-column align-items-center",
                "skill"
            )}
        >
            <h1>SKILLS</h1>
            <ul
                className={cx("row gx-0 f-flex justify-content-center", "list")}
            >
                {listLogo.map((item, index) => (
                    <li
                        className={cx(
                            "col-4 col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-3",
                            "item"
                        )}
                    >
                        <img src={item?.logo} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Skills;
