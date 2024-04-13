import React from 'react'
const curr_date= new Date();
const time=curr_date.getHours();

let greeting=""
if(time>1 && time<=12){
    greeting="Hello,good morning";
}
const Morning = () => {
  return (
    <>
    <h1> {greeting}</h1>
    </>
  )
}

export default Morning