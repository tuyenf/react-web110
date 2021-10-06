import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import './styles.scss';

var data = [
  {
    name: "",
    email: "",
    phone: "",
  },
];

class Form extends PureComponent {
  storeName = (event) => {
    data[0].name = event.target.value;
  };
  storeEmail = (event) => {
    data[0].email = event.target.value;
  };
  storePhone = (event) => {
    data[0].phone = event.target.value;
  };
  render() {
    return (
      <div>
        <div className="form-field">
          <h2>Your info</h2>
          <div className="form-input">
            <label>Name:</label>
            <input type="text" placeholder="Enter name..." onChange={this.storeName} />
          </div>
          <div className="form-input">
            <label>Email:</label>
            <input type="text" placeholder="Enter your email..." onChange={this.storeEmail} />
          </div>
          <div className="form-input">
            <label>Phone number:</label>
            <input type="text" placeholder="Enter your phone number..." onChange={this.storePhone} />
          </div>
          <button>
            <Link
              className="btn-link"
              to={{
                pathname: "datatable",
                data: data,
              }}
            >
              Submit
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
