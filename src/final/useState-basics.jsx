import React, { useState } from 'react';

const Index=()=>{
    const [count,setCount]= useState(0);
    const Ondecrement=()=>{
        //setCount(count-1);
        setCount((preCount)=>preCount-1);
        setCount((preCount)=>preCount-1);
    };
    const Onincrement=()=>
    {
       
        setCount((preCount)=> preCount+1);//function
        setCount((preCount)=>preCount+1);
        
    };
    return (
        
        <div>
            <button onClick={Ondecrement}>-</button>
            <span>{count}</span>
            <button onClick={Onincrement}>+</button>
        </div>
    );
};
export default Index;