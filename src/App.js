import React, { Component } from 'react';
import './App.css';

class App extends Component {

   constructor(props) {
    super(props);

    this.state = {
      start_date: '',
      repeat: '',
      repeat_change: '',
      shift_availablity: '',
      shift_change:'',
      arrival_time: '',
      depature_time: '',
      weekday:'',
      weekdays:''
    };
  }
  handleSelectDate = event => {
    this.setState({
      start_date: event.target.value
    })
  }

  handleSelectRepeat = event => {
    this.setState({
      repeat: event.target.value
    })
  }

  handleRepeatChange = event => {
    this.setState({
      repeat_change: event.target.value
    })
  }

  handleSelectShift = event => {
    this.setState({
      shift_availablity: event.target.value
    })
  }

  handleShiftChange = event => {
    this.setState({
      shift_change: event.target.value
    })
  }

  handleSelectStartTime = event => {
    this.setState({
      arrival_time: event.target.value
    })
  }

  handleSelectEndTime = event => {
    this.setState({
      depature_time: event.target.value
    })
  }

  onChangeValue = event => {
    this.setState({
      weekday: event.target.value
    })
  }
  
  onChangedays = event => {
    this.setState({
      weekdays: event.target.value
    })
  }

    render(){
  return (
    <div className="App">
    <div><span className="span labels">Select Start Date and Shift Times</span> <br/>
     <br/>
      <span style={{fontSize: '16px'}}>each row represents a shift</span> </div>
      <br/>
      <form>
        <div>
          <div className="input-container">
            <label className="labels">Select Start Date </label>
            <input type="text" name='start_date' onChange={this.handleSelectDate}/>
          </div>
          <div className="input-container">
            <label className="labels"> Select Repeat Type</label> 
            <select onChange={this.handleRepeatChange}>
              <option>Repeats</option>
              <option>None</option>
              <option>Daily</option>
              <option>Weekly</option>
            </select>
          </div>
          <div className="input-container">
            <label className="labels">Select Shift</label>
            <select onChange={this.handleShiftChange}>
              <option>Shifts</option>
              <option>morning shift - 5am to 9am</option>
            </select>
          </div>
          <div className="input-container">
            <label className="labels">Select Start Time </label>
            <input type="text" placeholder="00:00" name='arrival_time' onChange={this.handleSelectStartTime} />
          </div>
          <div className="input-container">
            <label className="labels">Select End Time </label>
            <input type="text" placeholder="00:00" name='depature_time' onChange={this.handleSelectEndTime}/>
          </div>
        </div>
        <div className="select-week" >
        <label className="labels-week">Please select the day of the week </label>
          <div className="week-container">
            <div className="week-item">
              <label className="labels-radio">MON </label>
              <input className="radio" type="radio" value="Mon" onChange={this.onChangeValue}/>
            </div>
            <div className="week-item">
              <label className="labels-radio">TUE </label>
              <input className="radio" type="radio" value="TUE" onChange={this.onChangeValue} />
            </div>
            <div className="week-item">
              <label className="labels-radio">WED </label>
              <input className="radio" type="radio" value="WED" onChange={this.onChangeValue}/>
            </div>
            <div className="week-item">
              <label className="labels-radio">THU </label>
              <input className="radio" type="radio" value="THU" onChange={this.onChangeValue}/>
            </div>
            <div className="week-item">
              <label className="labels-radio">FRI </label>
              <input className="radio" type="radio" value="FRI" onChange={this.onChangeValue}/>
            </div>
            <div className="week-item">
              <label className="labels-radio">SAT </label>
              <input className="radio" type="radio" value="SAT" onChange={this.onChangeValue}/>
            </div>
            <div className="week-item">
              <label className="labels-radio">SUN </label>
              <input className="radio" type="radio" value="SUN" onChange={this.onChangeValue}/>
            </div>
          </div>
        
        </div>
        <div className="day-week">
          <input className="radio" type="radio" onChange={this.onChangedays}/>
          <label className="labels">Weekends Only</label>
         </div>
        
        <button className="btn">ADD＋</button>
      </form>
    </div>
  );
}
}


export default App;
