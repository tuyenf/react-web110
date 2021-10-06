import React, { useState } from 'react';
import './styles.scss';

// Form.prototype = {
//   obSubmit: PropTypes.func,
// };

function Form() {
  const [data, setData] = useState({
    name: '',
    email: '',
    phonenumber: '',
  });
  const {name, email, phonenumber} = data;
  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value})
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://v1.nocodeapi.com/tuyenf/google_sheets/mLapXSBGNEkigREL?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[name, email, phonenumber, new Date().toLocaleDateString()]])
      }
      );
      await response.json()
      setData({...data, name: "", email: "", phonenumber: ""})
    } catch(err) {
      console.log(err)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign up Form</h3>
      <div className="form-group">
        <label htmlFor="name">Full name:</label>
        <input
        type="text"
        className='dorm-control'
        name="name"
        autoComplete="off"
        value={name}
        onChange={handleChange}
         />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
        type="text"
        className='dorm-control'
        name="email"
        autoComplete="off"
        value={email}
        onChange={handleChange}
         />
      </div>
      <div className="form-group">
        <label htmlFor="phonenumber">Phone number:</label>
        <input
        type="tel"
        className='dorm-control'
        name="phonenumber"
        autoComplete="off"
        value={phonenumber}
        onChange={handleChange}
         />
      </div>
      <div>
        <input 
          type='submit'
          value="submit"
          className="btn-submit"
        />
      </div>
    </form>
  );
}

export default Form;
