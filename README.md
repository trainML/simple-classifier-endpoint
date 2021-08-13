<div align="center">
  <a href="https://www.trainml.ai/"><img src="https://www.trainml.ai/static/img/trainML-logo-purple.png"></a><br>
</div>

# Simple Image Classifier Endpoint

### Prerequisites

Before beginning this example, ensure that you have satisfied the following prerequisites.

- A valid [trainML account](https://auth.trainml.ai/login?response_type=code&client_id=536hafr05s8qj3ihgf707on4aq&redirect_uri=https://app.trainml.ai/auth/callback) with a non-zero [credit balance](https://docs.trainml.ai/reference/billing-credits/)
- A python virtual environment with the [trainML CLI/SDK](https://github.com/trainML/trainml-cli) installed and [configured](https://docs.trainml.ai/reference/cli-sdk#authentication).
- A current version of [Node.js](https://nodejs.org/en/) installed.

## Instructions

1. `python deploy_endpoint.py`
2. `./classify_image.sh <endpoint url from previous step> ./images/pizza.jpg`
