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
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
