import './Chart.css';
import ChartBar from './ChartBar';

const Chart = props => {

    const expenseValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxVal = Math.max(...expenseValues);

    console.log("expenseValues", expenseValues);
    console.log("maxValue", maxVal);

    return <div className="chart">

        {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={maxVal} label={dataPoint.label} key={dataPoint.label} />)}
        
    </div>
};

export default Chart;



