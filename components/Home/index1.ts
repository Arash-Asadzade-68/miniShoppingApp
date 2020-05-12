export const a:boolean= true
// import React, { useState , useContext } from 'react';
// import Input from 'components/ListItems';
// import {ResultContext} from 'utils'
// import Styles from './styles.scss'
// import classes from 'classnames';
// const Home = () => {

//   const value = useContext(ResultContext);
//   const [inputs, setInputs] = useState(value)
 
//   const defaultValue = [{
//     id:Math.random(),
//     value:''
//   }]
//   // Add input to array
//   const appendInput = () => {
//     setInputs(inputs.concat(defaultValue));
//   }
//   //Delete input from array
//   const removeInput = (id: number) => {
//     const newInputs = [...inputs.filter(input => input.id !== id)]
//     if(newInputs.length===0) setInputs(defaultValue)
//     else setInputs(newInputs)
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('results',JSON.stringify(newInputs))
//   }
//   }

//   //Set value of input in array
//   const setValues = (value: string, index: number) => {
//     const newInputs = [...inputs];
//     newInputs.find(input => {
//       if (input.id === index) input.value = value
//     })
//     setInputs(newInputs);
//   }

//   //Save array of inputs values
//   const saveValues =()=>{
//     const newInputs = [...inputs.filter(input =>input.value.length >0)]
//     const results = [newInputs.map(input => {
//       return input.value;
//     })]
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('results',JSON.stringify(newInputs))
//   }
   
//    alert(results);
//   }

//   //Remove all values
//   const cancel =() =>{
//     setInputs(defaultValue)
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('results',JSON.stringify(defaultValue))
//   }
//   }

//   return (
//     <div className={Styles.container}>
//       <div className={Styles.cardHeader}>
//         <h3>Test</h3>
//       </div>
//       <div className={Styles.cardBody}>
        
//           <div >
//             {inputs.map((input, index) =>
//               <div key={input.id} className={Styles.groupField}>
//                 <Input 
//                       id={input.id} 
//                       setValues={(value) => setValues(value, input.id)} 
//                       valuesArrayLength={inputs.length}
//                       currentIndex={index}
//                       appendInput = {() => appendInput()}
//                       savedValue={input.value}/>
                      
//                 <i className={classes(Styles.deleteBtn, )} 
//                    onClick={() => removeInput(input.id)} >&#215;</i>
//               </div>
//             )}

//           </div>
      
//       </div>

//       <div className={Styles.cardFooter}>
//           <button onClick={()=>saveValues()} >save</button>
//           <button style={{color:"#616161"}} onClick={()=>cancel()} >cancel</button>
//       </div>

//     </div>
//   );

// }

// export default Home;
