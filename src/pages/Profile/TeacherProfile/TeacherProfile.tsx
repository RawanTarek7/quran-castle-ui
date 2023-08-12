import React from 'react';
import TeacherProfileForm from "./TeacherProfileForm"; // Adjust the import path based on your project structure

const TeacherProfile: React.FC = () => {
    // Define the teacher data
    const teacherData = {
        username: 'teacher123',
        fullName: 'John Teacher',
        erpId: 'ERP123',
        email: 'teacher@example.com',
        nationalId: '987654321',
        address: '456 Main St',
        nationality: 'American',
        country: 'United States',
        city: 'Cityville',
        gender: 'Male',
        age: 40,
        payoneerAccountNo: '9876543210987654',
    };

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
            }}>     <TeacherProfileForm teacher={teacherData}/>
        </div>
    );
};

export default TeacherProfile;
