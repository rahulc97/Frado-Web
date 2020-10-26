import React from 'react';

import './Table.scss';

const Table = (props) => {
  const { data } = props;
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th> Mobile </th>
            <th> Place </th>
            <th> Courses </th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataItem) => (
            <tr key={dataItem._id}>
              <td>{dataItem.name}</td>
              <td>{dataItem.email}</td>
              <td>{dataItem.mobile}</td>
              <td>{dataItem.place}</td>

              <td>
                {dataItem.courses.slice(',')[0]}
                {dataItem.courses.slice(',')[1]
                  ? ', ' + dataItem.courses.slice(',')[1]
                  : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
