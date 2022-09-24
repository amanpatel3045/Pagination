import { useState,useEffect } from "react";
import Postitem from "./Positem";
const getData=(page)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`).then
    ((res)=>{
        return res.json();
    }); 
    
};
// function Postitem({title,body}){
// return
//     <div>
//         <h4>{title}</h4>
//         <p>{body}</p>
//     </div>

// }
// function Postitem({title,body}){
//     return  <div style={{border:"1px solid green",margin:"5px"}}>
//         <h4>{title}</h4>
//         <p>{body}</p>
//         </div>
// }
function Posts(){
    const [posts,setPosts]=useState([]);
    const[loading,setLoading]=useState(false);
    const[page,setPage]=useState(1);

    useEffect(()=>{
         fetchandUpdateData(page);
    },[page])
    const fetchandUpdateData=async(page)=>{
        //makes an api call to "https://jsonplaceholder.typicode.com/posts"
        //get all data 
        //and update your UI with that data

        // getData().then((data)=>{
        //     // console.log(data);
        //     setPosts(data);
        // });
        try{
            setLoading(true);
         let data=await getData(page);
         setPosts(data);
         setLoading(false);
      
        }catch(error){
            console.log(error);
            setLoading(false);

        }

    }; 
    if(loading){
        // return <img src="https://media4.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=82a1493bsqt84bgglgap62qfslfdxqa0v68rcrm8hf1d3cv4&rid=200w.gif&ct=g" alt="gif"/>
    // return <img src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47r6o8iauehsg5vl1pqh5fjbiqzakwb9u4cuj93i07&rid=giphy.gif&ct=g"alt="gif"/>
return <h1>Loading...</h1>    
}

const handlePageChange=(changeBy)=>{
setPage(page+changeBy);
// fetchandUpdateData(page+changeBy);
}
    return(
        <div>
            <h1>Posts</h1>
            {/* <button onClick={fetchandUpdateData}>GET POSTS</button> */}
             <div>
                {posts.map((post)=>(
                  
                   
                  
                  // <Postitem key={post.id} title={post.title} body={post.body}/>
                
            
                // <Postitem key={post.id} title={post.title} body={post.body} />
               <Postitem key={post.id} {...post}/>
               ))}
             </div>
             <button disabled={page===1} onClick={()=>handlePageChange(-1)}>PREV</button>
             <button>{page}</button>
             <button onClick={()=>handlePageChange(+1)}>NEXT</button>
        </div>
    );
}
export default Posts 