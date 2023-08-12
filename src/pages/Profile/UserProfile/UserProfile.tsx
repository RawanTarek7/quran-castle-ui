import React from 'react';
import UserProfileForm from "./UserProfileForm";


const UserProfile: React.FC = () => {

    return (
        <div
            style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    position: 'relative', // Add position property
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center', // Center the background image
            }}>        <UserProfileForm
                user={{
                    fullName: 'John Doe',
                    email: 'john@example.com',
                    address: '123 Main St',
                    nationality: 'American',
                    username: 'johndoe123',
                    country: 'United States',
                    city: 'Cityville',
                    gender: 'Male',
                    nationalId: '1234567890',
                    age: 30,
                    payoneerAccountNo: '1234567890123456',
                }}
            /></div>);
};

export default UserProfile;
