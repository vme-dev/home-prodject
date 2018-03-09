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
var form = <form onSubmit={this.onSubmit}>
                    <p><label> Логин: <input type="text" name="login" onChange={this.onLoginChange}/></label></p>
                    <p><input type="button" onClick={ () =>{ this.props.onSend(curDate,this.login);this.props.onTextClick() }} />x</p>
                  </form>;

var err =  <div> The time is passed</div>;
        return ReactDOM.createPortal( 
     		<div className="modal_wrap">

          
  	     		<div className="modal_window">
  	            	<h1 > Modal window </h1> 

                  {( this.props.time.nowDate.getTime() > this.props.time.curentDate.getTime() )?err:form}

  	            	<button onClick={() => this.props.onTextClick()}> CLOSE </button>
  	        	</div>
           
          	</div>

    		,
            document.getElementById('portal')
        );
    }

}


export default connect(
  (store) => {return {
    time: store.time
  }},
  (dispatch) => {return {
    onTextClick: ()        => { dispatch(action.togleModal()); },
    onSend: (date,message) => { dispatch(action.SEND(date,message)); }
  }}
  
  )(Modal);
