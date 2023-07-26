import { useState } from 'react';


const Index =()=>

{
     
    /*function initialObj(){ //function
        return{ 
            
            firstN:'swe',
            lastN:'vam',
        };
            
    } */

    /* const initialObj=//object 
    {
        firstN:'swe',
        lastN:'vam',
    };*/


    /*const [data,setData]=useState(initialObj);//useState */
    /*const [data,setData]=useState({firstN:'swe',lastN:'vam',age:22});//useState */
    const [firstN,setfirstN]=useState('swe');
    const[lastN,setLastName]=useState('vam');
    const[age,setAge]=useState(22);
    const changeName=()=>{
        /*setData({...data,firstN:'swetha'})*/
        setfirstN('swetha' );
    };
    const changeLanstName=()=>
    {
        setLastName('vamshi');
    };
    const increaseAge=()=>
    {
        setAge(age+1);
    };
   
    
    return (
        <div>
            <p>hi world this is {firstN}</p>
            <button onClick={changeName}>click here to change name</button>
            <p> welcome my name is {lastN}</p>
            <button onClick={changeLanstName}>changeLanstName </button>  {<br></br>}
            <button>-</button>
            <span >{age}</span>
            <button onClick={increaseAge}>+</button>

        </div>
    );
};
export default Index;