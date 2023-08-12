import React from 'react';
import './TeacherCard.css';
import teacherImage from '../../assets/images/bg.png'

interface TeacherCardProps {
    teacherName: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacherName }) => {
    return (
        <section className="teacher-section">
            <div className="teacher-profile">
                <img src={teacherImage} alt="Teacher 1" className="teacher-image"/>
                <h3 className="teacher-name">{teacherName}</h3>
            </div>
        </section>
    );
};

export default TeacherCard;
