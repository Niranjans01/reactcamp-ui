import {Component} from 'react'
import Clock from './Clock';
class Home extends Component{
    constructor(props){
        super(props);
        this.state= {date:10}
    }

    render(){
        return (
            <div>
                <div>
                    <h1>Home Page</h1>
                    <Clock />
                </div>
            </div>
        )
    }

}

export default Home;
