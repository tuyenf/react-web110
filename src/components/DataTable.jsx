import MaterialTable from "material-table";
import React, { PureComponent } from "react";

class DataTable extends PureComponent {
  render() {
    const { data } = this.props.location;
    return (
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Phone", field: "phone"}
          ]}
          data={[
            {
              name: "Nguyen Van A",
              email: "nguyenvana@gmail.com",
              phone: "0393141008",
            },
            {
              name: "Nguyen Thi B",
              email: "nguyenthib@gmail.com",
              phone: "0876338110",
            },
            {
              index: <p>{data.index}</p>,
              name:  <p>{data[0].name}</p>,
              email: <p>{data[0].email}</p>,
              phone: <p>{data[0].phone}</p>,
            },
          ]}
          title="User Info"
        />
      </div>
    );
  }
}

export default DataTable;
// I am the Second one !
