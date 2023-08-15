import React from 'react';
import './TeacherCard.css';
import {Avatar, Typography} from '@mui/material';
import {useHistory} from "react-router-dom";

interface TeacherCardProps {
    teacherName: string;
    teacherGender: string;
    teacherAge: string;
    description: string;
}

const TeacherCard: React.FC<TeacherCardProps> = ({teacherName, teacherGender, teacherAge, description}) => {
    const history = useHistory();

    return (
        <section className="teacher-section" onClick={() => history.push('/teacher-profile')
        } style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', minHeight: '300px'}}>
            <div className="teacher-profile">
                <Avatar
                    className={'teacher-image'}
                    style={{
                        width: '85px',
                        height: '85px',
                        margin: '25px',
                        cursor: 'pointer'
                    }}
                    src="/broken-image.jpg"
                />
                <Typography variant="h5" className="teacher-name">{teacherName}</Typography>
                <Typography variant="subtitle1" className="teacher-age">
                    {teacherGender + ' - ' + teacherAge}
                </Typography>
                <Typography
                    style={{
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical'
                    }}
                    variant="subtitle1"
                    className="teacher-details"
                >
                    {description}
                </Typography>
            </div>
        </section>
    );
};

export default TeacherCard;
