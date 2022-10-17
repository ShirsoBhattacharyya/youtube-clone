# Youtube Clone

## Summary
YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google, and is the second most visited website, after Google Search.
This is an attempt to further polish my React skills by trying to clone Youtube. I have tried my best to make it look as close to the original Youtube India page as possible.
#### Deployment Link: https://yt-clone-shirso.web.app 

## Screenshots
- ### Home Page

  ![Home Page](https://github.com/ShirsoBhattacharyya/youtube-clone/blob/main/src/assets/pngs/youtube_homepage.png?raw=true)
  
- ### Signin Page

  ![Signin Page](https://github.com/ShirsoBhattacharyya/youtube-clone/blob/main/src/assets/pngs/youtube_loginpage.png?raw=true)
  
- ### Search Results Page

  ![Search Results Page](https://github.com/ShirsoBhattacharyya/youtube-clone/blob/main/src/assets/pngs/youtube_searchresultspage.png?raw=true)
  
- ### Subscriptions Page

  ![Subscriptions Page](https://github.com/ShirsoBhattacharyya/youtube-clone/blob/main/src/assets/pngs/youtube_subscriptionspage.png?raw=true)
  
- ### Channel Page

  ![Channel Page](https://github.com/ShirsoBhattacharyya/youtube-clone/blob/main/src/assets/pngs/youtube_channelpage.png?raw=true)
  
- ### WatchScreen Page

  ![WatchScreen Page](https://github.com/ShirsoBhattacharyya/youtube-clone/blob/main/src/assets/pngs/youtube_watchscreenpage.png?raw=true)  
  
- ### Comments Section Page

  ![Comments Section Page](https://github.com/ShirsoBhattacharyya/youtube-clone/blob/main/src/assets/pngs/youtube_commentsection.png?raw=true)  
  
## Features

- #### User search:
    The user is able to search literally any video he wants. The input term is being taken from the search box via useState hook and dispatched via actions where in the reducer function the initialState is being updated and sent to the api after getting the term via the use of useSelector as a dynamic query parameter(q) through which relevant information is being fetched.
    
- #### Login with Google via Firebase Authentication:
    This is the first time I successfully managed to implement login with Google via firebase. I did login with google previously via react-google-login and passport-js packages but this seemed the most challenging when it comes to navigating the documentation.

- #### Fetching from API:
    Through the usage of either fetch or axios, we can easily manage to fetch data from any api and append the data according to the way we want. I did insert a fetch function inside a useEffect hook to automatically generate live results from the api. In the api link, the api key(key which I stored inside an env folder to prevent expiry of the api) was the most important parameter.

- #### Cross platform responsiveness:
    The responsiveness of a website in various platforms ensure a great user experience throughout and makes any project a lot more impactful. I have ensured that this is taken care of as well in this project.  

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
