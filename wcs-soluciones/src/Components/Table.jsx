// import { useState, useEffect } from "react";
import _ from "lodash";
// import axios from 'axios';
const pageSize = 10;
const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Surname</th>

        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.nombre_cliente}</td>
            <td>{item.apellido_cliente}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;