# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Notes

User calls the api for either a random quote, or a random quote by a specific person. The api response is stored in state and passed down to the display quote section as a prop.

Originally passed quote as whole object down to displayquotes component but that caused issues with using default props, so passed individual attributes down instead. Error encountered when no props passed down to displayquote component. Resolved with use of default props

Next steps: Custom error messages to reduce reliance on browser alerts. Time taken so far ~ 7 hours.

Warning message functionality - getting the box to open and close as necessary. Wasn't saving the prop that was passed down into state. Used one warning object instead of 2 to minimise the amount of state created. Setdisplaywarning on its own caused too many rerenders. Used hook instead. Changed back into message and status combination because couldn't control display status in warningbox component. Resolved by creating a function in the parent component (App) and passing that down to the child component. State maintained in the parent component.

Local storage 1 behind actual quote.

Fixed with the following dataflow:

When the save button is clicked, the array of quotes from state is copied and the new quote is added using the concat method. The new array of quotes (i.e. not the one from state) is passed down into the local storage save function.

The localstorage save function takes the new array of quotes, converts it into JSON and saves it to localstorage with the key "quotesInLocalStorage". The new array is immediately retrieved from localstorage so it can be saved to state and passed down into other components

The getfromlocalstorage function retrieves the new quotes array from localstorage, parses it and saves it to state.

The updated state causes the new array of quotes to be passed down into the savedquotes component and rendered.