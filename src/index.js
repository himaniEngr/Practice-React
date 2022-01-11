import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   return <div>Hi There!</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
    // console.log(this);

    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
