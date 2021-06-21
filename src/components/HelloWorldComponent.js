import React from 'react';
import {Button} from "@material-ui/core";

class HelloWorldComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            messageSuffix: ''
        }
        this.counter = 0;
        console.log("conistructeur...")
    }

    componentDidMount() {
        /**
         *  initializing ...
         */

        console.log("componentDidMount...")

    }

    handleClick = () => {
        this.counter+=1;
        this.props.onMyButtonClicked(this.counter);
        this.setState({});
    }

    render() {
        console.log("RENDER IS CALLED !!!")
        return <div
            style={{padding: 20, backgroundColor: 'yellow'}}>

            <Button onClick={this.handleClick}>Change suffix</Button>

            {this.props.message + '_' + this.state.messageSuffix}

        </div>;
    }


}

export default HelloWorldComponent;


