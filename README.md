# Make Everything OK Button

Have you ever wished that there was a button you could press to make everything OK? Look no further! This React project provides just that - a button that, when clicked, will make everything OK (well, almost - it takes 4 seconds, but who's counting?). And if that's not enough, it even adds a confetti animation for extra flair.

## Practices Used

This project uses several modern React practices to create a fun and interactive user experience:

- **React Hooks**: The code uses React Hooks, which allow developers to use state and other React features in functional components.
- **State management**: The code uses the `useState` hook to manage state in the component. Specifically, it keeps track of whether the "Make everything okey" button has been clicked, whether the loading overlay should be shown, whether the "Everything is OK now" message should be shown, and whether the confetti animation should be shown.
- **CSS styles**: The code uses CSS to style the button and other elements on the page. The styles are defined in a separate CSS file and imported into the component.
- **Lifecycle methods**: The code uses the `useEffect` hook to set up and clean up the component. Specifically, it sets up a timer that runs when the "Make everything okey" button is clicked, and cleans up that timer when the component is unmounted.
- **Third-party components**: The code uses a third-party component called `react-confetti` to render a confetti animation when the "Continue" button is clicked.

## How to Use

To use this project, simply clone the repository and run the following commands:

npm install
npm start

Then navigate to `http://localhost:3000` in your web browser to see the "Make Everything OK" button in action.

Enjoy!
