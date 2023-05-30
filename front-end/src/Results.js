import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Results({ predictions }) {
  if (!predictions.length) {
    return null;
  } else {
    const reversed = [...predictions].reverse();
    return (
      <>
        <Box textAlign='center'>
          <Typography variant='h5'>Predictions</Typography>
        </Box>
        {reversed.map((prediction, i) => {
          return (
            <Grid container direction='column' key={i}>
              <br />
              <Paper variant='outlined' sx={{ backgroundColor: '#c924d2' }}>
                <Grid item xs={12}>
                  <Box textAlign='center'>
                    <Typography variant='subtitle1'>
                      {prediction.filename}
                    </Typography>
                  </Box>
                </Grid>
                <TableContainer component={Paper}>
                  <Table size='small'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Class Name</TableCell>
                        <TableCell align='left'>Class ID</TableCell>
                        <TableCell align='right'>Confidence</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {prediction.prediction.map((row) => (
                        <TableRow key={row.id}>
                          <TableCell component='th' scope='row'>
                            {row.name}
                          </TableCell>
                          <TableCell align='left'>{row.id}</TableCell>
                          <TableCell align='right'>
                            {parseFloat(row.confidence * 100).toFixed(2) + '%'}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          );
        })}
      </>
    );
  }
}

export default Results;
