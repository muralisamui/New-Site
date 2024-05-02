import { Box } from '@mui/material'
import NavBarMain from './components/NavBar/NavBar'
import ControlledSpeedDial from './components/SpeedDial'
import HomePage from './pages/HomePage'
import AboutMe from './pages/AboutMe'

function App() {
  return (
    <>
    <Box sx={{ paddingBottom: '40px', backgroundColor: 'rgb(240 242 245)' }}>
        <NavBarMain />
        <Box sx={{display:'flex',flexDirection:'column', gap:'40px'}}>
          <HomePage />
          <AboutMe />
        </Box>
          <ControlledSpeedDial />
      </Box>
    </>
  )
}

export default App
