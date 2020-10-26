import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import './AdminPage.scss';
import Table from '../../components/Table/Table';
import Spinner from '../../components/UI/Spinner/Spinner';

const AdminPage = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('/fetchAllUserData58fdbf5c0ef8a50b4cdd9a8b')
      .then((res) => {
        let userDatas = res.data;
        setIsLoading(false);
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
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <div className="containerAdmin">
      <div className="titleText">Registered Users</div>
      {isLoading ? <Spinner show={isLoading} /> : <Table data={data} />}
    </div>
  );
};

export default AdminPage;
