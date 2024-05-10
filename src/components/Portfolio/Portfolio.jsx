import CloseIcon from "@mui/icons-material/Close";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

import { dataProject } from "../../data/project";
import styles from "./Portfolio.module.scss";

const cx = classNames.bind(styles);
function Project() {
    const [popupShow, setPopupShow] = useState(false);
    const [project, setProject] = useState(null);
    const [currentImg, setCurrentImg] = useState();
    const isProjectClick = (item) => {
        setPopupShow(true);
        setProject(item);
        setCurrentImg(item.images[0].image);
    };

    useEffect(() => {
        if (popupShow) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    }, [popupShow]);

    return (
        <div
            id="portfolio"
            className={cx("container-fluid gx-0 ", "portfolio")}
        >
            <h1 className={cx("header-title")}>Projects</h1>
            <div className={cx("row gx-0", "list")}>
                {dataProject.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => isProjectClick(item)}
                        data-content={item.name}
                        className={cx("col-12 col-lg-4 col-md-6", "item")}
                    >
                        <img
                            src={item.images[0].image}
                            alt=""
                        />
                    </div>
                ))}
            </div>

            <div className={cx({ "over-lay": popupShow })}></div>
            <div className={cx("popup", { active: popupShow })}>
                {project && (
                    <div className={cx("d-flex row g-0", "popup-content")}>
                        {/* Btn close */}
                        <button
                            onClick={() => setPopupShow(false)}
                            className={cx("btn-close")}
                        >
                            <CloseIcon className={cx("btn-icon")} />
                        </button>

                        {/* Image container */}
                        <div
                            className={cx("col-12 col-lg-6", "image-container")}
                        >
                            <div className={cx("image-wrapper")}>
                                <img
                                    className={cx("main-image")}
                                    src={currentImg}
                                    alt=""
                                />
                            </div>
                            <Swiper
                                className={cx("swiper-list")}
                                spaceBetween={3}
                                slidesPerView={3}
                                onSlideChange={() =>
                                    console.log("slide change")
                                }
                            >
                                {project.images.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            className={cx("image-slide")}
                                            src={item.image}
                                            alt=""
                                            onClick={() =>
                                                setCurrentImg(item.image)
                                            }
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Description  */}
                        <div className={cx("col-12 col-lg-6", "description")}>
                            <h1>{project.name}</h1>
                            <h3>
                                <strong>Description</strong>:&nbsp;
                                {project.description}
                            </h3>
                            <h3>
                                <strong>Created</strong>: &nbsp;
                                {project.createAt}
                            </h3>
                            <h3>
                                <strong>Members</strong>: &nbsp;
                                {project.member}
                            </h3>
                            <h3>
                                <strong>Technology</strong>: &nbsp;
                                {project.technology}
                            </h3>
                            <h3>
                                <strong>Demo</strong>:&nbsp;
                                <a href={project.demo}>{project.demo}</a>
                            </h3>
                            <h3>
                                <strong>Source</strong>:&nbsp;
                                <a href={project.source}>{project.source}</a>
                            </h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Project;
