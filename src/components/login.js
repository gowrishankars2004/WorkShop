import React,{useState} from "react";
import axios from "axios";

function Create(){
    const [state,setState]=useState(
        {
            userId:'',
            passWord:''
        }
    );
    const handleChange = (event) =>{
        setState
        (
            {
                [event.target.name] : event.target.value
            }
        );
    }
    const handleSubmit = (event) => 
    {
        event.prevent.default();
        const Data = 
        {
            userId : state.userId,
            passWord : state.passWord
        };
        window.location.reload();
        axios.post('http://127.0.0.1:8080/',Data)
        .then
        (
            (response)=>
            {
                console.log(response);
            }
        )
        .catch
        (
            (error)=> 
            {
                console.log(error);
            }
        );
    }; 
    return(
        <form onSubmit={handleSubmit}>
            <h2>login</h2>
            <input 
            placeholder="userId"
            type="text"
            name="userId"
            onChange={handleChange}
            />
            <input 
            placeholder="passWord"
            type="text"
            name="passWord"
            onChange={handleChange}
            />
            <button>submit</button>
        </form>
    );
}
export default Create;