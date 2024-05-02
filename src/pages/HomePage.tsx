import { Box, Paper, Typography } from "@mui/material"
import HomePageBanner from '../assets/HomePageBannerResized.jpg'
import Grid from '@mui/material/Grid';

const HomePage = () => {
    const CardCommonStyles = {
        borderRadius: '20px'
    }
    return (
        <Box 
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
        >
            {/* <NavBarMain /> */}
            <Box
                component="img"
                src={HomePageBanner}
                sx={{ width: '100%',height: '100%' }}
            >
            </Box>
            <Paper elevation={8} sx={{ width: '95%', marginTop: '-64px', padding: '16px' }} >
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '24px', paddingBottom: '24px', textAlign:'center' }} >
                    <Grid item xs={4} md={3}>
                        <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexDirection: 'column', padding:'10px' }}>
                            <Typography variant="h3" sx={{ color: '#1976d2' }}>10+</Typography>
                            <Typography variant="h6">Commercial Projects</Typography>
                            <Typography>Led a group of 10 developers to successfully create stunning and functional Websites.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexDirection: 'column', padding:'10px' }}>
                            <Typography variant="h3" sx={{ color: '#1976d2' }}>2+</Typography>
                            <Typography variant="h6">Years of Development</Typography>
                            <Typography>With an experience over 2+ years, working over multiple tech-stacks catering needs of range of clients.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} md={3}>
                        <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexDirection: 'column', padding:'10px' }}>
                            <Typography variant="h3" sx={{ color: '#1976d2' }}>1000+</Typography>
                            <Typography variant="h6">Hours of Code</Typography>
                            <Typography>Creating components from scratch to using various libraries. Maintaining excellent code readability.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Box>
                    <Box sx={{
                        display: 'grid',
                        gap: '20px',
                        padding: '40px',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        gridTemplateRows: '280px 280px 0px 0px'
                    }}>
                        <Paper elevation={4}
                            sx={{ ...CardCommonStyles, gridColumn: 'span 2', gridRow: 'span 2' }}
                        >
                            <Typography variant="h3"
                                sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 2' }}
                            >Featured Work+</Typography>
                            <Typography variant="h6">Hours of Code</Typography>
                            <Typography>Hello</Typography>
                        </Paper>
                        <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexDirection: 'column' }}>
                            <Typography variant="h3"
                                sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 2' }}
                            >1000+</Typography>
                            <Typography variant="h6">Hours of Code</Typography>
                            <Typography>Hello</Typography>
                        </Paper>
                        <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexDirection: 'column' }}>
                            <Typography variant="h3"
                                sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 2' }}
                            >1000+</Typography>
                            <Typography variant="h6">Hours of Code</Typography>
                            <Typography>Hello</Typography>
                        </Paper>
                        <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexDirection: 'column' }}>
                            <Typography variant="h3"
                                sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 2' }}
                            >1000+</Typography>
                            <Typography variant="h6">Hours of Code</Typography>
                            <Typography>Hello</Typography>
                        </Paper>                        
                        <Paper elevation={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', flexDirection: 'column' }}>
                            <Typography variant="h3"
                                sx={{ ...CardCommonStyles, gridColumn: 'span 1', gridRow: 'span 2' }}
                            >1000+</Typography>
                            <Typography variant="h6">Hours of Code</Typography>
                            <Typography>Hello</Typography>
                        </Paper>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default HomePage