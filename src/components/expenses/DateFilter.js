 import "./DateFilter.css";

const DateFilter = () => {

    return(
    <div className='expenses-filter'>

        <select>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2022">2023</option>
        </select>
    
    </div>
    );
}


export default DateFilter;