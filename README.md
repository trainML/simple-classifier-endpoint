<div align="center">
  <a href="https://www.trainml.ai/"><img src="https://www.trainml.ai/static/img/trainML-logo-purple.png"></a><br>
</div>

# Simple Image Classifier Endpoint

### Prerequisites

Before beginning this example, ensure that you have satisfied the following prerequisites.

- A valid [trainML account](https://auth.trainml.ai/login?response_type=code&client_id=536hafr05s8qj3ihgf707on4aq&redirect_uri=https://app.trainml.ai/auth/callback) with a non-zero [credit balance](https://docs.trainml.ai/reference/billing-credits/)
- A python virtual environment with the [trainML CLI/SDK](https://github.com/trainML/trainml-cli) installed and [configured](https://docs.trainml.ai/reference/cli-sdk#authentication).
- A current version of [Node.js](https://nodejs.org/en/) installed.

## Create the trainML Endpoint

To create an endpoint using the [simple tensorflow classifier example](https://github.com/trainML/simple-tensorflow-classifier) with the necessary route configured, run the following command from a python virtual environment with the [trainML CLI/SDK](https://github.com/trainML/trainml-cli) installed and [configured](https://docs.trainml.ai/reference/cli-sdk#authentication)

```
python deploy_endpoint.py
```

Once the endpoint is running, it will print the endpoint URL to use in the subsequent steps.

#### Using the Command LIne

To get a prediction for the endpoint from the command line, you can use the `classify_image.sh` bash script in the repository. Simply specify the endpoint address from above and the path to a file you want to predict as the two arguments. For example:

```
./predict_scan.sh https://<job_id>.trainml.cloud ./images/pizza.jpg
```

#### Using a Browser

Open the file `front-end/src/config.js` with a text editor. Change the `api_address` value to the endpoint URL from the previous step and save the file. If you changed the route path in the previous step, you must also update that here.

Go to the `front-end` folder of the repository in a terminal window and type `npm start`. This will open a web browser to http://localhost:3000 and load the example front end. Click the `Upload File` button and select an image to classify (example image files are in the `images` folder of this repository). Click `Get Prediction` to send the file to the endpoint. When the response comes back, the list of the top five class categories and their confidence rating will be displayed on the right. Click `Upload New File` and `Get Prediction` on additional images as desired.
