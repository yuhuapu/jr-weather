import React from 'react';
import Condition from './Condition';
import Forcast from './Forecast';

function Main(props) {
    return (
        <main>
            <Condition 
                current={props.current}
                cityName={props.cityName}
                unit={props.unit}
            />
            <Forcast
                forecasts={props.forecasts}
                changeLimit={props.changeLimit}
                limit={props.limit}
                unit={props.unit}
            />
        </main>
    );
}

export default Main;