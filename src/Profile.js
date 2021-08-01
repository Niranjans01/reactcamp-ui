import {Component} from 'react'
import Clock from './Clock';

class Profile extends Component{
    constructor(props){
        super(props);
        this.state= {date:10}
    }

    render(){
        return (
            <div>
                <div>
                    <h1>Profile</h1>
                    <Clock/>
                </div>

            </div>
        )
    }

}

export default Profile;
