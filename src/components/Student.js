{/*
const Student =(props) =>{
    return(
        <div>
            <h1>Student Details</h1>
            <p>Student First Name : {props.firstName}</p>
            <p>Student Last Name : {props.lastName}</p>
            <p>Student Email : {props.email}</p>
        </div>
    )
}
*/}

const Student =({firstName,lastName,email}) => {
    return(
        <div>
            <h1>Student Details</h1>
            <p>Student First Name : {firstName}</p>
            <p>Student Last Name : {lastName}</p>
            <p>Student Email : {email}</p>
        </div>
    )
}
export default Student