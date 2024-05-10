import classNames from "classnames/bind";
import styles from "./MainPage.module.scss";
const cx = classNames.bind(styles);

function MainPage() {
    return <div className={cx("container-fluid")}></div>;
}

export default MainPage;
