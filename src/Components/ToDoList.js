import React from 'react';
import ReactDOM from 'react-dom';
import './ToDoList.css';

import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import * as action from "../action.js";


class ToDoList extends React.Component {


    render() {
    	var a;
    	if(this.props.time.doList[this.props.curentDate] == undefined) {
    	 a = <li>EMPTY</li>
    	}
    	else { 
	    	 a = this.props.time.doList[this.props.curentDate].map((user) => {
	    		return <li>{user}</li>
	    	});
	    }
        return 	<ul className="to-do-list">{a}</ul>;
    }

}


export default connect(
  (store) => {return {
    time: store.time
  }},
  (dispatch) => {return {
    onTextClick: () => { dispatch(action.f_text("fuck")); }
  }}
  
  )(ToDoList);
