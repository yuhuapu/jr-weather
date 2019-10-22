import React from 'react';
import Condition from './Condition';
import Forecast from './Forecast';

function Main(props) {
    return (
        <main>
            <Condition 
                unit={props.unit}
            />
            <Forecast
                unit={props.unit}
            />
        </main>
    );
}

export default Main;