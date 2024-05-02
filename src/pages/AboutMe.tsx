import { Box, Paper, Typography } from '@mui/material'
import CustomizedTimeline from '../components/TimeLine/CustomizedTimeline'

function AboutMe() {


  return (
    <Box
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
        <Paper elevation={8} sx={{ width: '95%', padding: '16px' }} >
            <Typography>Work experiences</Typography>
            <CustomizedTimeline/>
        </Paper>
    </Box>
  )
}

export default AboutMe