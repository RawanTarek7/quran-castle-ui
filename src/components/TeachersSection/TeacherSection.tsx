import React, {useEffect, useState} from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import './TeacherSection.css';

const teacherData = [


    {
        id: 1,
        image: '/images/teacher-section-logo/quran.png',
        title: 'Native Arabic Speakers',
        content: 'Benefit from learning Arabic and Quranic studies from teachers with a native command of the language.',
    },
    {
        id: 2,
        images: ['/images/teacher-section-logo/man.png', '/images/teacher-section-logo/woman.png'],
        title: 'Male and Female Teachers',
        content: 'We offer a diverse team of male and female teachers to create a comfortable learning environment for all students.',
    },
    {
        id: 3,
        image: '/images/teacher-section-logo/global.png',
        title: 'Multilingual Instructors',
        content: 'We offer Quran, Islamic, and Arabic instruction in multiple languages, including French, Urdu, Chinese, and English',
    },
    {
        id: 4,
        image: '/images/teacher-section-logo/certificate.png',
        title: 'Certified Professionals',
        content: 'Certified, experienced teachers with IJAZA and HAFIZ qualifications for top-quality education',
    },


];

const TeacherSection = () => {
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setContentVisible(true);
        }, 100);
    }, []);

    return (
        <div style={{height:'100vh'}} className={`teacher-section-content ${contentVisible ? 'show' : ''}`}>
           <Typography variant='h3'>About Our Teachers</Typography>
            <div className="centered-card-container">
                {teacherData.map((teacher, index) => (
                    <Card key={index}
                          style={{borderRadius: '35px',backgroundColor:'transparent'}}
                          className="teacher-card">
                        <CardContent style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Typography
                                style={{
                                    display: 'flex',
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    fontWeight: '500',
                                    fontSize: '20px',
                                    gap: `${teacher.id === 2 ? '0' : '10px'}`,
                                    color: 'goldenrod'
                                }}
                                variant="h5"
                                color="text.primary"
                            >
                                {teacher.images ? (
                                    teacher.images.map((img, imgIndex) => (
                                        <img
                                            key={imgIndex}
                                            width="25px"
                                            height='25px'
                                            src={process.env.PUBLIC_URL + img}
                                            alt="logo"
                                        />
                                    ))
                                ) : (
                                    <img
                                        width="25px"
                                        height='25px'

                                        src={process.env.PUBLIC_URL + teacher.image}
                                        alt="certi"
                                    />
                                )}
                                {teacher.title}
                            </Typography>
                            <Typography style={{margin: '25px'}} variant="h6" color="text.primary">
                                {teacher.content}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default TeacherSection;
