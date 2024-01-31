import React,{useEffect, useState} from 'react';
import Input from './Input';
import Display from './Display';

const App = () => {
const [leftData, setleftData] = useState([]);
const [rightData, setrightData] = useState([]);

    const getdata = (value) =>{
        const newArr = [
            value,...leftData
        ]
        setleftData(newArr);

    }
//     useEffect(
//         ()=>{
// if(leftData.length !=0){
//     const leftData = JSON.stringify(leftData);
//     localStorage.setItem("leftData",leftData);
// }
//         },
//         []
//     )
    function RemoveHandler(index){
        
       const newdata= leftData.filter(
            (d,i)=>{
                if(i === index){
                    const rightarr =[
                        d,...rightData
                    ]
                    setrightData(rightarr)

                    return false
                }
                else{
                    return true
                }
            }

        )
        setleftData(newdata);
    }

    

    function RemoveHandlerr(index){
        const newrightdata= rightData.filter(
             (d,i)=>{
                 if(i === index){
                     const rightarr =[
                         d,...leftData
                     ]
                     setleftData(rightarr)
 
                     return false
                    // console.log("dil wich")
                 }
                 else{
                     return true
                 }
             }
 
             )
             setrightData(newrightdata)
     }

     function Permanentdelete(index){
const removeelement = rightData.filter(
    (d,i)=>{
        if(i==index){
            return false 
        }
        else{
            return true;
        }
    }
)
setrightData(removeelement);
}

function Permanentdeletee(index){
    const removeelement = leftData.filter(
        (d,i)=>{
            if(i==index){
                return false 
            }
            else{
                return true;
            }
        }
    )
    setleftData(removeelement);
    }

    return (
        <div className='container'>
         <Input handler={getdata}/>
         <div className='row'>
            <div className='col-6'>
         <Display title="LEFT-SIDE" delete={Permanentdeletee} data={leftData} handler={RemoveHandler}/>
         </div>

         <div className='col-6'>
         <Display title="RIGHT-SIDE" delete={Permanentdelete} data={rightData} handler={RemoveHandlerr}/>
         </div>
         </div>
        </div>
    );
}

export default App;
