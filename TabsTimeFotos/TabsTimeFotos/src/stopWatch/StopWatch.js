import React from 'react';

import ('./stopWatchStyle.css');

export default class StopWatch extends React.Component {

    state = {
        timer: null,
        minutes: '00',
        seconds: '00',
        startDisable: true,
        stopDisable: false
    };

    constructor(props) {
        super(props);

        this.start = this.start.bind(this);
    }

    componentDidMount() {
        this.start();
    }

    componentWillMount() {
        clearInterval(this.state.timer);
    }

    start() {
        let self = this;
        let timer = setInterval(() => {
            let num = (Number(this.state.seconds) + 1).toString();
            let count = this.state.minutes;

            if (Number(this.state.seconds) === 59){
                count = (Number(this.state.minutes) + 1).toString();
                num = '00';
            }

            self.setState({
                minutes: count.length === 1 ? '0' + count : count,
                seconds: num.length === 1 ? '0' + num : num,
            });
        }, 1000);
        this.setState({timer});
    };

    onButtonStart(){
        this.start();
        this.setState({startDisable: true, stopDisable: false});
    }

    onButtonPause(){
        clearInterval(this.state.timer);
        this.setState({startDisable: false, stopDisable: true});
    }

    onButtonReset(){
        this.setState({
            timer: null,
            minutes: '00',
            seconds: '00',
        })
    }

    render() {
        return (
            <div className="stopwatch">
                <div className="stopwatch__screen">
                    {this.state.minutes}<span className="stopwatch__colon">:</span>
                    {this.state.seconds}<span className="stopwatch__colon"></span>
                    </div>
                <div className="stopwatch__button" onClick={ this.onButtonStart.bind(this) }>START</div>
                <div className="stopwatch__button" onClick={ this.onButtonPause.bind(this) }>PAUSE</div>
                <div className="stopwatch__button" onClick={ this.onButtonReset.bind(this) }>RESET</div>
            </div>
        )
    }
};




