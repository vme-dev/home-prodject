import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import * as action from "../action.js";

class Modal extends React.Component {
	constructor(props) {
      super(props);
      
      this.login = null;
      this.onLoginChange = this.onLoginChange.bind(this);
 
      
    }

    onLoginChange(e) {
      this.login = e.target.value;
      console.log(this.login);
    }

    render() {
    	
    	var curDate = this.props.time.curentDate.getDate() +"."+this.props.time.curentDate.getMonth()+"."+this.props.time.curentDate.getFullYear();
console.log(curDate);
        return ReactDOM.createPortal( 
     		<div className="modal_wrap">
	     		<div className="modal_window">
	            	<h1 > Week < /h1> 
	            	<form onSubmit={this.onSubmit}>
	          			<p><label> Логин: <input type="text" name="login" 
	                           onChange={this.onLoginChange}/></label></p>
	  					<p><label> Пароль: <input type="password" name="password" value={"s"}
	                            onChange={console.log("!")}/></label></p>
	          			<p><input type="button" onClick={ () =>{ this.props.onSend(curDate,this.login);this.props.onTextClick() }} />x</p>
        			</form>
	            	<button onClick={() => this.props.onTextClick()}> CLOSE </button>
	        	</div>
        	</div>
    		,
            document.getElementById('portal')
        );
    }

}

function f_text (text="qwer") {
  return {
    type: 'M',
    text:text
  }
};

export default connect(
  (store) => {return {
    time: store.time
  }},
  (dispatch) => {return {
    onTextClick: () => { dispatch(f_text("fuck")); },
    onSend: (date,message) => { dispatch(action.SEND(date,message)); }
  }}
  
  )(Modal);
