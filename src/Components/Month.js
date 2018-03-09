import React, { Component } from 'react';


function Day (props) {
  var d = 'day';
  if (props.curentDate.getDate() == props.index) {d = d + " " +"current"}
  return <div className={d} key={props.index} onClick={()=>{props.onClick(props.index)}}>{props.index}</div>;
};

export default function Month (props) {

  var a = props.arr.map((user) => {
    
           if ( props.nowDate.getDate() == user 
           && props.nowDate.getMonth() == props.curentDate.getMonth()
           && props.nowDate.getFullYear() == props.curentDate.getFullYear() ) {

         return <div className="day today" key={user} onClick={()=>props.onClick(user)}>{user}</div>;
      } 
      
      return <Day index={user} key={user} onClick={()=>props.onClick(user)} curentDate={props.curentDate}/>
      });

  return <ul className="month">{a}</ul>;
};