import React from "react";

function Contact() {
  return (
    <div className="about">
      <div>
        <a
        href="mailto">
        Email: tuyenf.1999@gmail.com
        </a>
      </div>
      <a 
      href="tel">
        Phone number: 0393 141 008
      </a>
      <p>Address: Dong Nai, Vietnam</p>
      <form className="form-field">
        <input type="text" placeholder="Full name" />
        <input type="tel" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default Contact;