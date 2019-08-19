import React from 'react';
import ReactDOM from 'react-dom';

import Tabs from './tabs/Tabs';
import StopWatch from './stopWatch/StopWatch';
import Timer from './lightBox/lightBox';
require('./tabs/style.css');


function App() {
    return (
        <div>
            <Tabs>
                <div label = "StopWatch">
                    <StopWatch />
                </div>
                <div label = "LightBox">
                    <Timer />
                </div>
            </Tabs>
        </div>
    )
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);