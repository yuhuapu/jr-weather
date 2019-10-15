import React from 'react';
import Condition from './Condition';
import Forecast from './Forecast';

function Main(props) {
    return (
        <main>
            <Condition 
                current={props.current}
                cityName={props.cityName}
                unit={props.unit}
            />
            <Forecast
                forecasts={props.forecasts}
                changeLimit={props.changeLimit}
                limit={props.limit}
                unit={props.unit}
            />
        </main>
    );
}

export default Main;