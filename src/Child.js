import React, { PureComponent } from "react";
import PureComp from "./PureComp";

class Child extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Dibakar"
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Dib"
      });
    }, 2000);
  }

  render() {
    console.log("******Parent Component Render ******");
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name} />
        {/* <RegularComponent  name = {this.state.name}/>
            <PureComp name = {this.state.name}/> */}
      </div>
    );
  }
}
export default Child;
