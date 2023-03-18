import styles from "./Project.module.scss";
import classNames from "classnames/bind";
import projectImg from "../../asset/image/project.png";

const cx = classNames.bind(styles);
function Project() {
    return (
        <div className={cx("container-fluid gx-0 ", "project")}>
            <h1>Projects</h1>
            <div className={cx("row gx-0", "list")}>
                <div
                    className={cx(
                        "col-6 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                        "item"
                    )}
                >
                    <img src={projectImg} alt="" />
                </div>

                <div
                    className={cx(
                        "col-6 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                        "item"
                    )}
                >
                    <img src={projectImg} alt="" />
                </div>
                <div
                    className={cx(
                        "col-6 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                        "item"
                    )}
                >
                    <img src={projectImg} alt="" />
                </div>
                <div
                    className={cx(
                        "col-6 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                        "item"
                    )}
                >
                    <img src={projectImg} alt="" />
                </div>
                <div
                    className={cx(
                        "col-6 col-xxl-4 col-xl-4 col-lg-4 col-md-4",
                        "item"
                    )}
                >
                    <img src={projectImg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Project;
