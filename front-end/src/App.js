import { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import config from './config';
import Input from './Input';
import Results from './Results';
import Header from './Header';

const uploadImage = async ({ filename, contents }) => {
  if (contents) {
    try {
      const resp = await axios.post(
        `${config.api_address}${config.route_path}`,
        {
          name: filename,
          contents,
        }
      );
      return resp.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response);
      } else {
        console.log(error);
      }
    }
  }
};

function App() {
  const [input, setInput] = useState({});
  const [predictions, setPredictions] = useState([]);

  return (
    <Grid>
      <Header />
      <br />
      <Container>
        <Grid container xs={12} spacing={2}>
          <Grid item xs={6}>
            <Input
              onChange={setInput}
              onSubmit={async () => {
                const result = await uploadImage(input);
                if (result) {
                  const [filename, prediction] = Object.entries(result)[0];
                  setPredictions((predictions) => {
                    const new_predictions = [...predictions];
                    new_predictions.push({ filename, prediction });
                    return new_predictions;
                  });
                }
              }}
            />
          </Grid>
          <Grid item xs={6}>
            {predictions ? <Results predictions={predictions} /> : undefined}
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default App;
