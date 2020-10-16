import React from "react";
import { Link } from "react-router-dom";

const Course = ({ Courses }) => {
    return (
        <section className="terms-items">
            <header>
                <h2> آخرین دوره های تاپ لرن </h2>
                <Link to="/archive"> مشاهده همه دوره ها </Link>
            </header>
            <div className="row" >
                {
                    Courses.map(Course => (

                        <div key={Course._id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 term-col">
                            <article>
                                <Link to={`/course/${Course._id}`} className="img-layer">
                                    <img src={`https://toplearnapi.ghorbany.dev/${Course.imageUrl}`} />
                                </Link>
                                <h2 />
                                <Link to={`/course/${Course._id}`}> {Course.title} </Link>
                                <h2 />
                                <span>رایگان </span>
                                <i>1:52:32</i>
                            </article>
                        </div>




                    ))}
            </div>
        </section>
    );
};

export default Course;
