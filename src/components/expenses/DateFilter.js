 import "./DateFilter.css";

const DateFilter = (props) => {

    const onSubmitDateFilterHandler = (event) =>{
        props.onSelectDateFilter(event.target.value);
    }

    return(
   
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.filterYear} onChange={onSubmitDateFilterHandler} >
            <option value="2020" >2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2022">2023</option>
        </select>
    
       </div>
    </div>
    );
}


export default DateFilter;