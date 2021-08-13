import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
  },
  table: {},
}));

function Results({ predictions }) {
  const classes = useStyles();
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
              <Paper variant='outlined' className={classes.paper}>
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
