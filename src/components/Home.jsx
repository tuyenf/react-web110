import React from "react";
import {withRouter} from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <img
        src="https://images.unsplash.com/photo-1593642532871-8b12e02d091c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1412&q=80"
        alt="home"
       />
       <h1 className="heading">Welcom to my wwebsite !</h1>
    </div>
  )
}

export default withRouter(Home);