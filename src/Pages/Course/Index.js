import React, { useEffect, useState } from 'react';
import '../../styles/all-index.scss';
import { apiURL } from '../../utils/apiUrl';
import axios from 'axios';
import CourseTable from '../../Components/CoursesTable';

const Index = () => {
    const [courses, setCourses] = useState([])
    const [scrolled, setScrolled] = useState(true);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            let isTop = window.scrollY < 50;
            if (window.innerWidth <= 992 && isTop !== true) {
                setScrolled(false);
            } else {
                setScrolled(true);
            }
        })

        const fetchCourses = () => {
            axios.get(`${apiURL}users`)
                .then(res => {
                    setCourses(res.data)
                })
        }

        fetchCourses()
    }, [])

    return (
        <div className="index">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-12 px-lg-0 mb-4 mb-lg-5">
                        <div
                            className={scrolled ? "card border-0 filter-card shadow-sm" : "card border-0 filter-card shadow-sm fixed-filter"}>
                            <div className="card-body p-3">
                                <div className="d-flex">
                                    <div className="ml-auto pr-2">
                                        <select className="form-control shadow-none">
                                            <option>Published</option>
                                            <option>Unpublished</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select className="form-control shadow-none">
                                            <option>Mobile App Development</option>
                                            <option>Web App Development</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 px-lg-0">
                        <div className="card border-0 data-card mb-4">
                            <div className="card-body">
                                <CourseTable courses={courses} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Index;