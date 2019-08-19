import style from './lightboxstyle.module.css';
import React from 'react';
export default class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            array: ['https://source.unsplash.com/2ShvY8Lf6l0/800x599', 'https://source.unsplash.com/Dm-qxdynoEc/800x799', 'https://source.unsplash.com/qDkso9nvCg0/600x799', 'https://source.unsplash.com/iecJiKe_RNg/600x799'],
            stringURL: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
            number: 0,
        };
        this.startTimer();
    }

    nextImg = () => {
        this.setState((prevState) => {
            if(this.state.number === 3){
                return {
                    number: prevState.number = 3,
                }
            }
            return {
                number: prevState.number + 1,
                stringURL: prevState.stringURL = this.state.array[this.state.number + 1],
            }
        });
    };

    prevImg = () => {
        this.setState((prevState) => {
            if(this.state.number === 0){
                return {
                    number: prevState.number = 0,
                }
            }
            return {
                number: prevState.number - 1,
                stringURL: prevState.stringURL = this.state.array[this.state.number - 1],
            }
        });
    };

    startTimer = () => {
        this.timer1 = setInterval(this.nextImg, 3000);
    };

    thisImg = (number) => {
        this.setState((prevState) => {
            return {
                number: prevState.number = number,
                stringURL: prevState.stringURL = this.state.array[this.state.number + 1],
            }
        });
    };

    render() {
        return(
            <div className={style.content}>
                <button className={style.btn} onClick={this.prevImg}>◀️</button>
                <div className={style.contents}>
                    <img src={this.state.stringURL} />
                    <div className={style.btni}>
                        <button className={style.btnImg} onClick={()=>{this.thisImg(-1)}}>1</button>
                        <button className={style.btnImg} onClick={()=>{this.thisImg(0)}}>2</button>
                        <button className={style.btnImg} onClick={()=>{this.thisImg(1)}}>3</button>
                        <button className={style.btnImg} onClick={()=>{this.thisImg(2)}}>4</button>
                    </div>
                </div>
                <button className={style.btn} onClick={this.nextImg}>▶️</button>
            </div>
        );
    }
}