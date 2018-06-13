import React from 'react';
import ReactDOM from 'react-dom';
import './Week.css';
import moment from 'moment';

function WeekDay () {
	
	var a = moment().format("MMM Do YY");
	return <span>1  {a}</span>
}

class Week extends React.Component {
	

  	render() {

	    return (
	      <div className="Week">
	      
	        <h1>Week</h1>
			
			<WeekDay />

	      </div>
	    );
  	};

};

export default Week;
