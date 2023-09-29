import { useState } from "react"

const Users =() =>{
    // 1st element property ,2nd element function & with useState passing the default value

    // First Ways
    const[firstName, setFirstName]=useState("Parmendra")
    const[lastName, setLastName]=useState("Kumar")

    // 2nd we can also provide
    //const[user, setuser]=useState({"Parmendra","Kumar"})

    function updateUsers(){
        setFirstName("Param")
        setLastName("G")
    }

    return(
        <>
        <h1>User Details</h1>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <button onClick={updateUsers}>Update User</button>
        </>
    )
}

export default Users