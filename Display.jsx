import React from 'react';

const Display = (props) => {
    // const removehandler = (value) => {
    //     props.handler(value);
    // }
    return (
        
        <ul className="list-unstyled container-fluid ">
            <div className='fw-bold text-center my-3 h2'>{props.title}</div>
            
        {props.data.map((d, i) => {
          return (
            
            <Listitem  task={d} key={i}  delete={()=>props.delete(i)}  panda={() => props.handler(i)} />
          );
        })}
      </ul>
    );
}
const Listitem =(props)=>{
   
   
    return(
       
    
  
    <li className='container-fluid shadow-sm relative rounded my-3' key={props.key} style={{position:'relative'}}>
<span>
    {props.task}
</span>
<span onClick={
   props.panda
} style={{
    position:'absolute',
    right:'40px'
}}>
    X
</span>

<span onClick={
   props.delete 
} style={{
    position:'absolute',
    right:'0px'
}}>
    <i class="fa-solid fa-dumpster"></i>
</span>

    </li>
  

        
    )
}
export default Display;
