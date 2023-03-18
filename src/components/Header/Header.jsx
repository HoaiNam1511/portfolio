import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx("container-fluid gx-0", "header")}>
            <nav className={cx("row gx-0 d-flex align-items-end", "nav")}>
                <h2 className={cx("col-3", "logo")}>HoaiNam</h2>

                <ul
                    className={cx(
                        "col-9 d-flex align-items-end justify-content-center",
                        "nav-list"
                    )}
                >
                    <li className={cx("nav-item")}>Home</li>
                    <li className={cx("nav-item")}>About</li>
                    <li className={cx("nav-item")}>Skill</li>
                    <li className={cx("nav-item")}>Project</li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
