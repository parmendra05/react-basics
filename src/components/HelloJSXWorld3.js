import React from "react"

const HelloJSXWorld3 = () => {

    function buttonClicked(){
        alert("Button Clicked")
    }
    return <div>
        <h1 className="title">Title</h1>
        <h3>Sub Tittle</h3>
        <p>Paragraph the above title</p>
        <button onClick={buttonClicked}>Click Here</button>
    </div>
   }

export default HelloJSXWorld3