# FrontEnd Assesment

In this project you will find the source code for a Transactions Mobile Web PWA. Please read carefully this documentation for how-to build, design decisions and useful notes.

## Web Application Design

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It is a useful CLI tool for creating React applications. It has a built-in webpack configuration with default values, that can be extended via a config file for a custom-configuration (e.g. add some cool plug-ins, like Brotoli compression).

This application also uses [Material UI](https://material-ui.com) as a UI Framework. Material UI is one of the best (if not the best) UI framework for React. Although it follows Google's Material Design Guidelines, every component's styles can be easily overiden to implement custom styles. It also provedes useful tools (via React Hooks) and eases tremendously the development.

This app was built with an offline-first Progressive Web Application design in mind. It implements a service worker in order to enable rich features such as assets caching, offline capabilities and push notifications. This also provides faster loads, with an app-shell architecture and lazy loading components. By using this approach, components from the app-shell, like background and header, the First Meaningful Paint loads faster to the user.

Concerning app state, I personally prefer implementing React Contexts. However, Redux is a strong posibility as well.

Finally, since this is just a mock-up, there is not much to test. Create-react-app includes `react-testing` library by default. `Jest` is also a good option.

### Useful libraries
This are some useful libraries (not all of them are present in this project).
- React Router, useful library for app routing.
- react-i18n, for localization.
- axios: nice lib for HTTP requests.
- eslint & prettier: for develpment env only, keeps code clean!
- typescript: typed languages all the way!
- Redux & Sagas if you prefer centralized data stores.

## Try it
In the `front` directory, after running `yarn start`, you can run `yarn build` to build the project and `yarn serve` to fire up a server, default port is `4000`. You can also use `npm` if that's your package manager of choice.