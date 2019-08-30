import React from 'react';

let resultSelector={
    type1:{value:renderType1()},
    type2:{value:renderType2()},
}

function result (type){
    return resultSelector[type]['value']
}

function renderType1(){
    return (
        <h1>render Type 1</h1>
    )
}

function renderType2(){
    return (
        <h1>render Type 2</h1>
    )
}

function Gateway(props) {
  return (
    <div>
    {result(props.renderType?props.renderType:"type1")}
    </div>
  );
}

export default Gateway;
