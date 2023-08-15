import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeacherCard from "../../components/TeachersSection/TeacherCard";
import './AutoPlayCarousel.css'

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5,
        slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
        breakpoint: {max: 1024, min: 768},
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
        breakpoint: {max: 767, min: 464},
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const teachers = [
    {
        teacherName: 'Teacher 1',
        teacherGender: 'Male',
        teacherAge: '30',
        description: 'Experienced teacher with a passion for teaching.'
    },
    {
        teacherName: 'Teacher 2',
        teacherGender: 'Female',
        teacherAge: '28',
        description: 'Dedicated educator specializing in mathematics.'
    },
    {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    }, {
        teacherName: 'Teacher 3',
        teacherGender: 'Male',
        teacherAge: '35',
        description: 'Science enthusiast with a focus on Physics.',
    },
];


const Slider = () => {

    return (
        <div className="parent">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={true}
                showDots={true}
                infinite={true}
                pauseOnHover={true}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
            >
                {teachers.map((teacher, index) => {
                    return (
                        <div style={{padding: '45px',cursor:'pointer'}} className="slider" key={index}>
                            <TeacherCard teacherName={teacher.teacherName} teacherGender={teacher.teacherAge}
                                         teacherAge={teacher.teacherAge}
                                         description={teacher.description}></TeacherCard>
                        </div>
                    );
                })
                }
            </Carousel>
        </div>
    )
        ;
};
export default Slider;
