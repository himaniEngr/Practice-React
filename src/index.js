import React from "react";
import ReactDOM from "react-dom";

// const App = () => {
//   return <div>Hi There!</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };
    // console.log(this);

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  componentDidMount() {
    console.log("My component was rendered to the screen");
  }
  componentDidUpdate() {
    console.log("My compoenent was rerendered to the screen");
  }
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat} </div>;
    }
    return <div>loading</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
