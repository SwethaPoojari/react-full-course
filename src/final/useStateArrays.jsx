import React, {useState} from 'react';

const Index=()=>{

    const array1=[
        {
            id:'bfeuf',
            firstN:'swe',
            lastN:'vam',
        },
        {
            id:'bfheut',
            firstN:'swetha',
            lastN:'vamshi',

        },
        {
            id:'bfheufw',
            firstN:'swetha poojari',
            lastN:'vamshi yadhav',
        },
    ];
    const [data,setData]=useState(array1);
    const handleDelete=(comingId) =>{
        const filterData=data.filter((eachObj)=>{
            return eachObj.id !== comingId ;
            
            
        });
        setData(filterData);
    };
    return (
        <div>
            <ul>
                {
                    data.map((eachObj)=>{
                        const{firstN,lastN,id}=eachObj;
                        return (
                            <li key={eachObj}>
                                <div>{firstN}</div>
                                
                                <div>{lastN}</div>
                                <button onClick={()=>handleDelete(id)}>delete </button>
                                
                                
                            </li>
                        );
                    })
                    
                }
            </ul>
        </div>
        
    );
    
};
export default Index;