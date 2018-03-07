import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Modal from './Components/Modal';
import ToDoList from './Components/ToDoList';
import Week from './Components/Week';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import {bindActionCreator} from 'redux';

import * as action from "./action.js";


function f_text (text="qwer") {
  return {
    type: 'M',
    text:text
  }
};


function Day (props) {
  var d = 'day';
  if (props.curentDate.getDate() == props.index) {d = d + " " +"current"}
  return <div className={d} key={props.index} onClick={()=>{props.onClick(props.index)}}>{props.index}</div>;
};

function Month (props) {

  var a = props.arr.map((user) => {
      if (props.nowDate.getDate() == user 
        && props.nowDate.getMonth() == props.curentDate.getMonth()
        && props.nowDate.getFullYear() == props.curentDate.getFullYear()) {
         return <div className="day today" key={user} onClick={()=>props.onClick(user)}>{user}</div>;
      } 
      
      return <Day index={user} key={user} onClick={()=>props.onClick(user)} curentDate={props.curentDate}/>
      });

  return <ul className="month">{a}</ul>;
};

function Info (props) {
  return (
    <div >
      <ul>

      </ul>
    </div>
    )
}

class App extends Component {

//handlClick: () => f_add();
  

  render() {
    return (
      <div className="App">
        {this.props.time.modal && <Modal />}
        <div>{this.props.time.nowDate.toString()}</div>
        <div>{this.props.time.curentDate.toString()}</div>

        <button onClick={() => {
          //console.log(this.props.time.curentMounth());
          this.props.onTudaClick()}}> + </button>

        <button onClick={() => this.props.onSudaClick()}> - </button>

        <button onClick={() => this.props.onResetClick()}> Reset </button>
        <button onClick={() => this.props.onCheckDate(1)}> date </button>
        <button onClick={() => this.props.onModal()}> Modal </button>
        
        <div className="wrap_m">
          <Month arr={this.props.time.curentMounth()} 
               nowDate={this.props.time.nowDate} 
               curentDate={this.props.time.curentDate}
               onClick={(date) => this.props.onCheckDate(date)}
               />

          <ToDoList curentDate={this.props.time.curentDate.getDate()+"."+this.props.time.curentDate.getMonth()+"."+
        this.props.time.curentDate.getFullYear()}/>

        </div>
        <Info />

      </div>
    );
  }
}
//
export default connect(
  (store) => {return {
    index: store.counter.index,
    text: store.text.text,
    time: store.time
  }},
  (dispatch) => {return {
    onTudaClick: () => { dispatch(action.NEXT_MONTH()); },
    onSudaClick: () => { dispatch(action.PREV_MONTH()); },
    onResetClick: () => { dispatch(action.RESET()); },
    onCheckDate: (date) => { dispatch(action.CHECK_CURR_DAY(date)); },
    onModal: () => { dispatch(f_text()); }
  }}
  
  )(App);
