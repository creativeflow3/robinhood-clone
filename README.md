# Robinhood Clone

- Based on tutorial here: https://www.youtube.com/watch?v=TxggrQ0nHjY

## This app is a simple robinhood clone. There are a few updates from the original tutorial below:

- This uses Vite instead of Create React App since CRA is now deprecated.
- Some cleanup and simplification of the axios based API calls and firebase calls
- All files are typescript enabled with types created for useState, props, etc
- Chart.js calls had to be completely refactored because the youtube file used an old version.
- Firestore calls had to be refactored due to changes since the video being made.

## Updates to come:

- Remove firebase calls, and replace with a NodeJS call to mongodb
- Make the layout mobile friendly
- Add a registration / login screen
- Make sure NodeJS backend has authorization middleware
- Cleanup of linting, eslint and prettier
- Jest unit tests

## To Run:

- Go to finnhub https://finnhub.io/ and get an api key.
- Go to firebase firestore and create an account.
- Copy the .env_example file and rename it .env, and add your environment values there. The .gitignore will already ignore the .env file.
- git clone, and run npm install, then npm run dev.
