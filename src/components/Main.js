import React from 'react';
import Condition from './Condition';
import Forcast from './Forecast';

function Main(props) {
    return (
        <main>
            <Condition 
                current={props.current}
            />
            <Forcast
                forecasts={props.forecasts}
                changeLimit={props.changeLimit}
                limit={props.limit}
            />
        </main>
    );
}

export default Main;