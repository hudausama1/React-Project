import React , {use, useEffect} from "react"; 

function Home() {
    useEffect(()=>{
        console.log("from Mounting")
    },[]);

    useEffect(()=>{
        return()=>{
            console.log("from Unmounting")
        }
    },[]);
    return <div>Home</div>
}

export default Home;