import React from "react";
function Table(props) {
  var showdata = ()=> {
    var data = props.value;
    return data.map(value => {
      return (
        <tr key={value.id}>
          {/* <th scope="row">{value.id}</th> */}
          <td>{value.tittle}</td>
          <td>{value.price}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {/* <th scope="col">id</th> */}
            <th scope="col">Tittle</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>{showdata()}</tbody>
      </table>
    </div>
  );
}

export default Table;
