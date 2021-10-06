import React from "react";
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DataPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {headerName: 'ID', field: 'id'},
        {headerName: 'Full name', field: 'name'},
        {headerName: 'Email', field: 'email'},
        {headerName: 'Phone number', field: 'phoneNumber'},
      ],
      // rowData: null,
      rowData: [
        {id: '1', name: 'Tuyenf', email: 'tuyenf.1999@gmail.com', phoneNumber: '0393141008'},
        {id: '2', name: 'Dung', email: 'phonenix.0708@gmail.com', phoneNumber: '097353667'},
        {id: '3', name: 'Phu', email: 'phunguyen2202@gmail.com', phoneNumber: '0309454668'},
      ]
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/15psn9')
      .then(res => res.json)
      .then(rowData => this.setState({rowData}))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
      <h1>User Data</h1>
      <div className="ag-theme-balham"
      style={{
        width: 800,
        height:600,
      }}
      >
      <AgGridReact
      columnDefs={this.state.columnDefs}
      rowData={this.state.rowData}
      >

      </AgGridReact>
      </div>
      </div>
    )
  }
}


export default DataPage;