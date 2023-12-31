import React, { ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { styled, Theme } from '@mui/system';

interface LayoutProps {
    children: ReactNode;
}

const LayoutRoot = styled('div')(({ theme }: { theme: Theme }) => ({
    marginTop: '65px',

    [theme.breakpoints.down('sm')]: {
        marginTop: '85px',
    },
}));

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    return (
        <div style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', // Center the background image
        }}>
            <CssBaseline />
            <Header />
            <LayoutRoot>{children}</LayoutRoot>
            <Footer />
        </div>
    );
};

export default Layout;
