import React from "react";
function Table(props) {
  var showdata = ()=> {
    console.log(props.value)
    var data = props.value||[];
    return data.map((value,index) => {
      return (
        <tr key={index}>
          <td>{value.title}</td>
          <td>{value.price}</td>
          <td><button className="btn btn-danger" onClick={()=>props.onDelete(value._id)}>Delete</button></td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">title</th>
            <th scope="col">Price</th>
            <th scope="col"></th>

          </tr>
        </thead>
        <tbody>{showdata()}</tbody>
      </table>
    </div>
  );
}

export default Table;
