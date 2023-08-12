import React from 'react';
import { Container, Typography, Paper, Grid, Divider } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

interface TeacherProfileProps {
    teacher: {
        username: string;
        fullName: string;
        erpId: string;
        email: string;
        nationalId: string;
        address: string;
        nationality: string;
        country: string;
        city: string;
        gender: string;
        age: number;
        payoneerAccountNo: string;
    };
}

const TeacherProfileForm: React.FC<TeacherProfileProps> = ({ teacher }) => {
    const slideUp = useSpring({
        transform: 'translateY(0)',
        from: { transform: 'translateY(40px)' },
        config: { duration: 800 },
    });

    return (
        <Container maxWidth="md" sx={{ paddingTop: '75px', paddingBottom: '60px' }}>
            <animated.div style={slideUp}>
                <Typography variant="h4" gutterBottom>
                    Teacher Profile
                </Typography>
            </animated.div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Personal Information</Typography>
                        <Divider sx={{ marginY: '10px' }} />
                        <Typography variant="body1">{teacher.fullName}</Typography>
                        <Typography variant="body1">{teacher.email}</Typography>
                        <Typography variant="body1">{teacher.address}, {teacher.city}, {teacher.country}</Typography>
                        <Typography variant="body1">{teacher.nationality}</Typography>
                        <Typography variant="body1">Gender: {teacher.gender}</Typography>
                        <Typography variant="body1">Age: {teacher.age}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Account Information</Typography>
                        <Divider sx={{ marginY: '10px' }} />
                        <Typography variant="body1">Username: {teacher.username}</Typography>
                        <Typography variant="body1">
                            National ID: {teacher.nationalId}
                        </Typography>
                        <Typography variant="body1">
                            Payoneer Account No: {teacher.payoneerAccountNo}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TeacherProfileForm;
