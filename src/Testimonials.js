import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Profile2 from "./images/person_2.jpg.webp";
import Profile3 from "./images/person_3.jpg.webp";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <>
        <div className="untree-session pb-5 pt-5" id="testimonial-session">
            <div className="container mt-lg-5">
                {/* to divide two column in a row "Header and Author" */}
                <div className="row">
                    {/* Column 1 : Caption and header column Testimonials */}
                    <div className="col-lg-4 mb-5">
                    <div className="mb-4 text-start">
                        <span className="text-uppercase text-primary">
                        Testimonials
                        </span>
                        <h2 className="display-2 fs-1 fw-normal">
                        Our Customers Feedback
                        </h2>
                        <div className="">
                        {/* 2 icons arrow */}
                        <a
                            href="#"
                            className="btn btn-secondary m-1"
                            data-bs-target="#carouselAuthorIndicators"
                            data-bs-slide-to="prev"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </a>
                        <a
                            href="#"
                            className="btn btn-secondary "
                            data-bs-target="#carouselAuthorIndicators"
                            data-bs-slide-to="next"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                        </div>
                    </div>
                    </div>

                    {/* Column 2 :Author column and carousel session */}
                    <div
                        id="carouselAuthorIndicators"
                        className="carousel slide p-0 col-lg-8"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner row mb-4">
                            <div className="carousel-item active ">
                            <div className="row">
                                {/* first author  */}
                                <div className="col-md-6 text-start mb-4 ps-5">
                                    <div className="row">
                                    <blockquote className=" blockquote text-wrap fst-italic fs-6">
                                        "Separated they{" "}
                                        <span className="higight">
                                        live in Bookmarksgrove right at the coast of the
                                        Semantics
                                        </span>
                                        , a large language ocean. A small river named Duden
                                        flows by their place and supplies it with the
                                        necessary regelialia."
                                    </blockquote>
                                    </div>
                                    <div className="author d-flex">
                                    <div className=" me-3">
                                        <img
                                        className="img-fluid rounded-pill"
                                        width="50px"
                                        height="50px"
                                        src={Profile2}
                                        alt="profileImg"
                                        />
                                    </div>
                                    <div className=" fw-light">
                                        <strong className="d-block"> James Anderson</strong>
                                        <span className="d-block text-muted">
                                        Facebook, Products Lead
                                        </span>
                                    </div>
                                    </div>
                                </div>

                                {/* second author */}
                                <div className="col-md-6 text-start mb-4 ps-5">
                                    <div className="row">
                                    <blockquote className=" blockquote  text-wrap fst-italic fs-6">
                                        Separated they{" "}
                                        <span className="higight">
                                        live in Bookmarksgrove right at the coast of the
                                        Semantics
                                        </span>
                                        , a large language ocean. A small river named Duden
                                        flows by their place and supplies it with the
                                        necessary regelialia.
                                    </blockquote>
                                    </div>
                                    <div className="author d-flex">
                                    <div className=" me-3">
                                        <img
                                        className="img-fluid rounded-pill"
                                        width="50px"
                                        height="50px"
                                        src={Profile3}
                                        alt="profileImg"
                                        />
                                    </div>
                                    <div className=" fw-light">
                                        <strong className="d-block"> James Anderson</strong>
                                        <span className="d-block text-muted">
                                        Facebook, Products Lead
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>

                            <div className="carousel-item">
                            <div className="row">
                                {/* third author */}
                                <div className="col-md-6 text-start mb-4 ps-5">
                                
                                    <div className="row">
                                    <blockquote className=" blockquote  text-wrap fst-italic fs-6">
                                        Separated they{" "}
                                        <span className="higight">
                                        live in Bookmarksgrove right at the coast of the
                                        Semantics
                                        </span>
                                        , a large language ocean. A small river named Duden
                                        flows by their place and supplies it with the
                                        necessary regelialia.
                                    </blockquote>
                                    </div>
                                    <div className="author d-flex">
                                    <div className=" me-3">
                                        <img
                                        className="img-fluid rounded-pill"
                                        width="50px"
                                        height="50px"
                                        src={Profile3}
                                        alt="profileImg"
                                        />
                                    </div>
                                    <div className=" fw-light">
                                        <strong className="d-block"> James Anderson</strong>
                                        <span className="d-block text-muted">
                                        Facebook, Products Lead
                                        </span>
                                    </div>
                                    </div>
                               
                                </div>

                                {/* fourth author  */}
                                <div className="col-md-6 text-start mb-4 ps-5">
                                    <div className="row">
                                    <blockquote className=" blockquote text-wrap fst-italic fs-6">
                                        "Separated they{" "}
                                        <span className="higight">
                                        live in Bookmarksgrove right at the coast of the
                                        Semantics
                                        </span>
                                        , a large language ocean. A small river named Duden
                                        flows by their place and supplies it with the
                                        necessary regelialia."
                                    </blockquote>
                                    </div>
                                    <div className="author d-flex">
                                    <div className=" me-3">
                                        <img
                                        className="img-fluid rounded-pill"
                                        width="50px"
                                        height="50px"
                                        src={Profile2}
                                        alt="profileImg"
                                        />
                                    </div>
                                    <div className=" fw-light">
                                        <strong className="d-block"> James Anderson</strong>
                                        <span className="d-block text-muted">
                                        Facebook, Products Lead
                                        </span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* carousel indicators */}
                        <div className="carousel-indicators row">
                            <button
                            type="button"
                            data-bs-target="#carouselAuthorIndicators"
                            data-bs-slide-to="0"
                            className="active bg-primary"
                            ></button>

                            <button
                            type="button"
                            data-bs-target="#carouselAuthorIndicators"
                            data-bs-slide-to="1"
                            className="bg-primary"
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
