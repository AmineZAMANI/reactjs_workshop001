import React from 'react';
import HelloWorldComponent from "./components/HelloWorldComponent";
import TableComponent from "./components/TableComponent";


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            parentCounter: ''
        }
    }

    componentDidMount() {
        /**
         *  initializing ...
         */
    }

    onClicked = (counter) => {
        this.setState({parentCounter: counter});
    }


    render() {
        return <div style={{padding: 100, backgroundColor: 'red'}}>
            <div>{this.state.parentCounter}</div>
            <HelloWorldComponent message={"Salut tout le monde"} onMyButtonClicked={this.onClicked}/>
            <TableComponent cols={[{colKey: "name", colLibelle: "Name"},
                {colKey: "check", colLibelle: "Sexe"}, {colKey: "id", colLibelle: "Id"},
                {
                    colKey: "button", colLibelle: "Operations", action: (row) => {
                        console.log(row)
                    }
                }]}
                            rows={[{id: 1, name: "ZAMATI", sexe: "M"}, {id: 2, name: "Said", sexe: "M"}]}/>

        </div>;
    }


}

export default App;


