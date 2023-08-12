import React from 'react';
import { Container, Typography, Paper, Grid, Divider } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

interface UserProfileProps {
    user: {
        fullName: string;
        email: string;
        address: string;
        nationality: string;
        username: string;
        country: string;
        city: string;
        gender: string;
        nationalId: string;
        age: number;
        payoneerAccountNo: string;
    };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    const slideUp = useSpring({
        transform: 'translateY(0)',
        from: { transform: 'translateY(40px)' },
        config: { duration: 800 },
    });

    return (
        <Container maxWidth="md" sx={{ paddingTop: '75px', paddingBottom: '60px' }}>
            <animated.div style={slideUp}>
                <Typography variant="h4" gutterBottom>
                    User Profile
                </Typography>
            </animated.div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Personal Information</Typography>
                        <Divider sx={{ marginY: '10px' }} />
                        <Typography variant="body1">{user.fullName}</Typography>
                        <Typography variant="body1">{user.email}</Typography>
                        <Typography variant="body1">
                            {user.address}, {user.city}, {user.country}
                        </Typography>
                        <Typography variant="body1">{user.nationality}</Typography>
                        <Typography variant="body1">Gender: {user.gender}</Typography>
                        <Typography variant="body1">Age: {user.age}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
                        <Typography variant="h6">Account Information</Typography>
                        <Divider sx={{ marginY: '10px' }} />
                        <Typography variant="body1">Username: {user.username}</Typography>
                        <Typography variant="body1">
                            National ID: {user.nationalId}
                        </Typography>
                        <Typography variant="body1">
                            Payoneer Account No: {user.payoneerAccountNo}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default UserProfile;
