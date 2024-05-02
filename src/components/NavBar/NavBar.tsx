import { Box, Button, Typography } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useState } from 'react'
import './TabMenuStyles.css'

function NavBarMain() {
    const [selectedTab, setSelectedTab] = useState<number>(0); // State to keep track of the selected tab

    const handleTabClick = (index: number) => {
        setSelectedTab(index); // Update the selected tab
    };

    const handlePrintClick = () => {
        const pdfPath = '/Murali_Samui_Web_Dev_Resume.pdf';
        console.log('hello')
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Murali_Samui_Web_Dev_Resume.pdf'; // The name to save the PDF file as
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                width: '100%',
                height: '100px',
                bgcolor: 'rgba(58, 58, 58, 0.2)',
                backdropFilter: 'blur(10px)',
                zIndex: 1000,
            }}>
            <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    backgroundImage: 'linear-gradient(60deg, #E21143, #FFB03A)',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}
            >
                Murali
            </Typography>
            <Box>
                <nav>
                    <a href='#' className={selectedTab === 0 ? 'selected' : ''} onClick={() => handleTabClick(0)}>Home</a>
                    <a href='#' className={selectedTab === 1 ? 'selected' : ''} onClick={() => handleTabClick(1)}>About Me</a>
                    <a href='#' className={selectedTab === 2 ? 'selected' : ''} onClick={() => handleTabClick(2)}>Projects</a>
                    <a href='#' className={selectedTab === 3 ? 'selected' : ''} onClick={() => handleTabClick(3)}>Tools</a>
                    <div className="animation" style={{ left: selectedTab * 100 }}></div>
                </nav>
            </Box>
            <Box>
                <Button onClick={handlePrintClick} variant='contained' startIcon={<FileDownloadIcon />} sx={{ textTransform: 'none' }}>
                    Resume
                </Button>
            </Box>
        </Box>
    )
}

export default NavBarMain