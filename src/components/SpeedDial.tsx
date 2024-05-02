import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const actions = [
    { icon: <PrintIcon />, name: 'Print', action: () => handlePrintClick() },
    { icon: <ShareIcon />, name: 'Share', action: () => { console.log('share') } },
    { icon: <EmailRoundedIcon />, name: 'Email', action: () => handleEmailClick() },
];

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
const handleEmailClick = () => {
    const email = 'muralisamui997@gmail.com';
    const subject = 'Hey! lets connect to work together.';
    const body = 'Lets connect to discuss awesome ideas and build something great together.';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
};


export default function ControlledSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
            <SpeedDial
                ariaLabel="SpeedDial controlled open example"
                sx={{ position: 'absolute', bottom: 16, right: 16, zIndex: 1000 }}
                icon={<SpeedDialIcon />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={action.action}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
