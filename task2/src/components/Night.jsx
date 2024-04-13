import React from 'react'
const curr_date=new Date();
const time = curr_date.getHours();
let greeting=""
if(time>18 && time<24 ){
    greeting="good night"
}
const Night = () => {
  return (
    <><h1>hello ,{greeting}</h1></>
  )
}

export default Night