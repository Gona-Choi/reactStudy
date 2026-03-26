import React from 'react'

const Box = (props) => {
  console.log(props)
  let result;
  if(props.title==='COMPUTER'&&
    props.result != 'TIE' &&
    props.result != ''
  ){result = props.result==="WIN"?"LOSE":"WIN"
    }else{
      result = props.result
    }
  return(
    <div className='box'>
      <h1>{props.title}</h1>
      <img className="item-img" src = {props.item?props.item.img:'/img/question.jpg'} />
      <h2>{result}</h2>
    </div>
  )

}

export default Box