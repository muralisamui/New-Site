import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HtmlOutlinedIcon from '@mui/icons-material/HtmlOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

export default function CustomizedTimeline() {
    return (
        <Timeline position="alternate">
            {/* University  */}
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    2018 - 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color='primary'>
                        <SchoolIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2, cursor: 'pointer' }} onClick={() => alert('clicked')}>
                    <Typography variant="h6" component="span">
                        University
                    </Typography>
                    <Typography >West Bengal University of Technology
                        <InfoOutlinedIcon sx={{ fontSize: 'medium' }} />
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Web Developer Intern  */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <HtmlOutlinedIcon />
                    </TimelineDot>
                    <TimelineConnector  />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Front End Developer Intern
                    </Typography>
                    <Typography>Confinace Mobility
                        <InfoOutlinedIcon sx={{ fontSize: 'medium' }} />
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Cloud Intern  */}
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <CloudOutlinedIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Cloud Developer Intern
                    </Typography>
                    <Typography>Ardent Computech Pvt Ltd
                        <InfoOutlinedIcon sx={{ fontSize: 'medium' }} />
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Software Engineer  */}
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                >
                    2022-2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span">
                        Software Engineer
                    </Typography>
                    <Typography>Sigilo Tech
                        <InfoOutlinedIcon sx={{ fontSize: 'medium' }} />
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}
