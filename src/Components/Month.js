import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from "../action.js";


function Day (props) {
  var d = 'day';
  if (props.curentDate.getDate() == props.index) {d = d + " " +"current"}
  return <div className={d} key={props.index} onClick={()=>{props.onClick(props.index)}}>{props.index}</div>;
};

// function Month (props) {

//   var a = props.arr.map((user) => {
    
//            if ( props.nowDate.getDate() == user 
//            && props.nowDate.getMonth() == props.curentDate.getMonth()
//            && props.nowDate.getFullYear() == props.curentDate.getFullYear() ) {

//          return <div className="day today" key={user} onClick={()=>props.onClick(user)}>{user}</div>;
//       } 
      
//       return <Day index={user} key={user} onClick={()=>props.onClick(user)} curentDate={props.curentDate}/>
//       });

//   return <ul className="month">{a}</ul>;
// };

class Month extends Component {
 
  render() {
  	var a = this.props.time.curentMounth().map((user) => {
    
           if ( this.props.time.nowDate.getDate() == user 
           && this.props.time.nowDate.getMonth() == this.props.time.curentDate.getMonth()
           && this.props.time.nowDate.getFullYear() == this.props.time.curentDate.getFullYear() ) {

         return <div className="day today" key={user} onClick={() => this.props.onCheckDate(user)}>{user}</div>;
      } 
      
      return <Day index={user} key={user} onClick={() => this.props.onCheckDate(user)} curentDate={this.props.time.curentDate}/>
      });
    return (
    	<ul className="month">{a}</ul>
	);
  }
};

export default connect(
  (store) => {return {
    time: store.time
  }},
  (dispatch) => {return {
   onCheckDate: (date) => { dispatch(action.CHECK_CURR_DAY(date)); },
  }}
  
  )(Month);