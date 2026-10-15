import React,{useEffect}from 'react'

function Shopping () {
const[data,setData]=useState();

   useEffect(() => {
    
    async function fetchData() {
     try{
             const response = await fetch('https://fakestoreapi.com/products');
                const jsonres= await response.json();
                console.log(jsonres);
             setData(jsonres)
     }catch(e){
        console.log(e);
     }
    }
    fetchData()
   },[])

    return(
        <div>Shopping
            {
                data.map((ele)=>( 
                     <div style ={{border:'2px solid cyan'}}>
                     <h2>${ele.id}</h2>
                     <h2>${ele.title}</h2>
                        <h2>${ele.price}</h2>
                        <h2>${ele.description}</h2>

                     </div>
                     ))
                  
        
                
                
            }
        </div>
    )
}
export default Shopping