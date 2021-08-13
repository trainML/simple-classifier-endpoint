import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import SendIcon from '@material-ui/icons/Send';

import UploadButton from './UploadButton';

const useStyles = makeStyles((theme) => ({
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  paper: {
    height: '600px',
    alignContent: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: grey[300],
  },
}));

const getImage = async (e) => {
  const filename = e.target.files[0].name;
  const file = await new Promise((resolve, reject) => {
    var fr = new FileReader();
    fr.onload = () => {
      resolve(fr.result);
    };
    fr.readAsDataURL(e.target.files[0]);
  });
  const base64result = file.split(',')[1];

  return { filename, contents: base64result };
};

function Input({ onChange, onSubmit }) {
  const classes = useStyles();
  const [filename, setFilename] = useState();
  const [image, setImage] = useState();
  const [submitting, setSubmitting] = useState(false);

  if (filename) {
    return (
      <Grid container direction='column' xs={12}>
        <Grid item xs={12}>
          <Box textAlign='center'>
            <Typography variant='h5'>Input Image</Typography>

            <img
              className={classes.image}
              alt='uploaded'
              src={`data:image/png;base64,${image}`}
            />
            <Typography variant='subtitle1'>{filename}</Typography>
          </Box>
        </Grid>
        <br />
        <Grid item xs={12}>
          <Box textAlign='center'>
            <Grid container justifyContent='center' xs={12} spacing={3}>
              <Grid item>
                <UploadButton
                  name='Upload New File'
                  onChange={async (e) => {
                    const image = await getImage(e);
                    setImage(image.contents);
                    setFilename(image.filename);
                    onChange(image);
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  variant='contained'
                  color='primary'
                  icon='send'
                  disabled={submitting}
                  endIcon={<SendIcon />}
                  onClick={async (e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    await onSubmit();
                    setSubmitting(false);
                  }}
                >
                  Get Prediction
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Paper variant='outlined' className={classes.paper}>
        <UploadButton
          name='Upload File'
          onChange={async (e) => {
            const image = await getImage(e);
            setImage(image.contents);
            setFilename(image.filename);
            onChange(image);
          }}
        />
      </Paper>
    );
  }
}

export default Input;
