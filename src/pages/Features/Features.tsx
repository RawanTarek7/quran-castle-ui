import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import './Feature.css';

const featureData = [
    {
        id: 1,
        title: 'Free trial class',
        description: 'Detailed Assessment: Experience our commitment to personalized learning through a complimentary trial session that includes a comprehensive student assessment.',
        margin: '25px'
    },
    {
        id: 2,
        title: 'One-on-One and Group Classes',
        description: 'Choose between personalized one-on-one sessions or group classes (Halaqah) to suit your preferred learning style.',
        margin: '45px'
    },
    {
        id: 3,
        title: '24hours classes',
        description: 'Tailored Scheduling, Enjoy flexibility in class scheduling to accommodate your individual needs.',
        margin: '65px'
    },
    {
        id: 4,
        title: 'Our Library',
        description: 'Our library is full of free resources and games which are up to date and easy to access.',
        margin: '85px'
    }
];

const Features = () => {
    return (
        <div className="feature-cards-page">
            {featureData.map((feature) => (
                <Card
                    elevation={3}
                    sx={{
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '55px',
                        marginTop: feature.margin
                    }}
                    className="feature-card"
                    key={feature.id}
                >
                    <div className="feature-icon-container">
                        <img
                            src={process.env.PUBLIC_URL + '/images/feature.png'}
                            alt={`Feature ${feature.title}`}
                            className="feature-icon"
                        />
                    </div>
                    <CardContent style={{ color: 'white' }}>
                        <Typography variant="h5" component="div">
                            {feature.title}
                        </Typography>
                        <Typography variant="body2" color="white">
                            {feature.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Features;
