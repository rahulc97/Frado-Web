import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './AdminPage.scss';
import Table from '../../components/Table/Table';
// import "react-table/react-table.css";

const AdminPage = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/fetchAllUserData58fdbf5c0ef8a50b4cdd9a8b')
      .then((res) => {
        let userDatas = res.data;
        setData(userDatas);
        let destructuredData = [];
        userDatas.forEach((user) => {
          let userDetails = {
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            place: user.place,
            courses: user.courses,
          };
          destructuredData.push(userDetails);
        });
        console.log(destructuredData);
        // setData(destructuredData)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="containerAdmin">
      <div className='titleText'>Registered Users</div>
      <Table data={data} />
    </div>
  );
};

export default AdminPage;
