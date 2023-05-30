import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

function Header() {
  return (
    <Paper
      sx={{ padding: '10px', textAlign: 'center', backgroundColor: '#130201' }}
    >
      <Grid container xs={12}>
        <Grid item xs={12} md={3}>
          <a href='https://www.trainml.ai'>
            <img
              alt='logo'
              style={{ width: '250px' }}
              src='https://www.trainml.ai/static/img/trainML-logo-purple.png'
            />
          </a>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box textAlign='left'>
            <Typography variant='h3' sx={{ color: '#fff', paddingTop: '15px' }}>
              Image Classifier Endpoint
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Header;
