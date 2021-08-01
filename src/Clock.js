import {Component} from 'react'

function Time(params) {
    return <h2>{params.time}</h2>
}

class Clock extends Component{

    constructor(props){
        super(props);
        this.state= {date:10}
    }

    increaseTime(params) {
    this.setState({date:20})
    }


    render(){
        return (
            <div>
                <h1>The Time is</h1>
                <Time time={this.state.date}/>
                <button onClick={()=>this.increaseTime()} >Increate Time</button>
            </div>
        )
    }

}

export default Clock;