import React from "react";
import "./about.css"

export default function  About()  {
	return (
		<>
		<div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="top-breadcrumb">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Social</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    <div className="img" style={{ backgroundImage: "linearGradient(150deg, rgba(63, 174, 255, .3)15% rgba(63, 174, 255, .3)70% rgba(63, 174, 255, .3)94%)", url: "https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg",
    height: "350px", backgroundSize: "cover" }}>
	</div>

    <div className="card social-prof">
        <div className="card-body">
            <div className="wrapper">
                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" className="user-profile" />
                <h3>Datt Razz</h3>
                <p>Software Engineer</p>
            </div>
            <div className="row ">
                <div className="col-lg-12">
                    <ul className=" nav nav-tabs justify-content-center s-nav">
                        <li><a href="#value">Timeline</a></li>
                        <li><a className="active" href="#value">About</a></li>
                        <li><a href="#value">Friends</a></li>
                        <li><a href="#value">Photos</a></li>
                        <li><a href="#value">Videos</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <div className="card">
                <div className="card-body info-card social-about">
                    <h2 className="text-blue">About</h2>
                    <h4><strong>About Me</strong></h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <h4 className="mb-3"><strong>Personal Info</strong></h4>
                    <div className="row">
                        <div className="col-6">
                            <div className="social-info">
                                <i className="fas fa-birthday-cake mr-2"></i>
                                <span>11/18/2022</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="social-info">
                                <i className="fas fa-map-marker-alt mr-2"></i>
                                <span>Burlington</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="social-info">
                                <i className="fas fas fa-users mr-2"></i>
                                <span>Male</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="social-info">
                                <i className="fas fa-briefcase mr-2"></i>
                                <span>Software Engineer</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="social-info">
                                <i className="fas fas fa-mobile mr-2"></i>
                                <span>8392832983</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="social-info">
                                <i className="fas fas fa-envelope mr-2"></i>
                                <span>like @example.com</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card info-card">
                <div className="card-body">
                    <h2 className="text-blue">Skills</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>HTML5</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4>Bootstrap Framework</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Vanilla Javascript</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4>React Js</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>Adobe Photoshop</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4>Adobe Illustrator</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4>ReactJS/Toolkit</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h4>Redux</h4>
                            <div className="mb-3">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <div className="card info-card">
                <div className="card-body">
                    <h2 className="text-blue">Education</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4><strong>Per Scholas </strong></h4>
                            <p>August 2020 to November 2022 </p>
                        </div>
                        <div className="col-lg-6">
                            <h4><strong>Course: Software Engineering</strong></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-lg-6">
                            <h4><strong>Udacity</strong></h4>
                            <p>April 2022 to June 2022 </p>
                        </div>
                        <div className="col-lg-6">
                            <h4><strong>Front-end Developer Nano-Degree</strong></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="card info-card">
                <div className="card-body">
                    <h2 className="text-blue">Work</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <h4><strong>Pat & Turner - 04/2022 - Present</strong></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-lg-6">
                            <h4><strong> - 11/2018-04/2021</strong></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-lg-6">
                            <h4><strong>Global Infosoft - 2011-2018</strong></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="col-lg-6">
                            <h4><strong>Freelancer - 2011-12</strong></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
	);
};

