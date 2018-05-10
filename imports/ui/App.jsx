import React, {Component} from "react";

import D3 from "./d3.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agencyList :[],
            routeList:[],
            routeConfig:[],
        };
    }

    componentDidMount(){
        Meteor.call("agencyList", (err, res)=>{
            if(err) throw err;
            this.setState({agencyList : res});
            console.log(this.state.agencyList);
        });
        Meteor.call("routeList","actransit", (err, res)=>{
            if(err) throw err;
            this.setState({routeList : res});
            console.log(this.state.routeList);
        });
        Meteor.call("routeConfig","actransit","F", (err, res)=>{
            if(err) throw err;
            this.setState({routeConfig : res});
            console.log(this.state.routeConfig);
        });
    }

    render() {
        return (
            <div>
                <D3/>
            </div>
        );
    }
}

export default App;