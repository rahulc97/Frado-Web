import React, { useState } from 'react';
import { Form, ErrorMessage, Formik, Field } from 'formik';
import { Multiselect } from 'multiselect-react-dropdown';
import * as Yup from 'yup';
import './Register.scss';
import Logo from '../../assets/register.png';

import axios from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';

const Register = (props) => {
  const courseArray = [
    { name: 'NTPC Course', id: 'NTPC' },
    // { name: 'PSC Course', id: 'PSC' },
  ];

  const [multiList, setMultiList] = useState([]);
  const [isRequestSend, setIsRequestSend] = useState(false);

  const multiSelectHandler = (selectedList) => {
    setMultiList(selectedList);
  };
  const multiSelectRemoveHandler = (selectedList, removedItem) => {
    // console.log('[qawrwqe]', selectedList, removedItem);
    setMultiList((currState) =>
      currState.filter((item) => item.id !== removedItem.id)
    );
  };

  const updateMulti = () => {
    if (multiList.length > 0) {
      const nameArray = multiList.map((listElem) => listElem.name);
      // console.log('[nameArray]', nameArray);
      return nameArray.toString();
    }
    return '';
  };
  return (
    <>
      <Spinner show={isRequestSend} />
      <div>
        <div className="formContainer">
          <Formik
            initialValues={{
              name: '',
              email: '',
              mobile: '',
              place: '',
              courses: '',
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(35, 'Max Limit exceeded')
                .required('Required')
                .matches(
                  /^([a-zA-Z]+(\s{0,3}[a-zA-Z]\s{0,3})*)+(\s{0,1})*$/,
                  'Invalid name'
                ),
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              mobile: Yup.string()
                .required('Required')
                .matches(/^[0-9]{7,10}$/, 'Invalid contact number'),
              place: Yup.string()
                .required('Required')
                .max(200, 'Address limit exceeded'),
              courses: Yup.string().required('Select courses'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setIsRequestSend(true);
              console.log(JSON.stringify(values));
              const data = {
                name: values.name,
                email: values.email,
                mobile: values.mobile,
                place: values.place,
                courses: values.courses,
              };

              axios
                .post('/register', data)
                .then((res) => {
                  console.log(res);
                  setIsRequestSend(false);
                  if (res.status === 200) {
                    alert('Registration Success');
                    props.history.replace('/');
                  } else {
                    alert('Registration Failed. Try after some time');
                    props.history.replace('/');
                  }
                })
                .catch((err) => {
                  console.log(err);
                  setIsRequestSend(false);
                });
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   setSubmitting(false);
              // }, 400);
            }}
          >
            {({ values, handleChange }) => {
              // eslint-disable-next-line no-param-reassign
              values.courses = updateMulti();

              return (
                <Form className="form">
                  <img src={Logo} className="image" alt="sf" />
                  <div className="formHeader"> Register Now</div>

                  <div className="inputItems">
                    <Field
                      name="name"
                      type="text"
                      className="field"
                      placeholder="Name"
                    />
                    <div className="errorMessage">
                      <ErrorMessage name="name" />
                    </div>
                  </div>

                  <div className="inputItems">
                    <Field
                      name="email"
                      type="email"
                      className="field"
                      placeholder="EmailId"
                    />
                    <div className="errorMessage">
                      <ErrorMessage name="email" />
                    </div>
                  </div>

                  <div className="inputItems">
                    <Field
                      name="mobile"
                      type="text"
                      className="field"
                      placeholder="Mobile"
                    />
                    <div className="errorMessage">
                      <ErrorMessage name="mobile" />
                    </div>
                  </div>

                  <div className="inputItems">
                    <Field
                      name="place"
                      type="text"
                      className="field"
                      placeholder="Place"
                    />
                    <div className="errorMessage">
                      <ErrorMessage name="place" />
                    </div>
                  </div>
                  <div className="multiselectDiv">
                    <Multiselect
                      options={courseArray}
                      displayValue="name"
                      name="courses"
                      avoidHighlightFirstOption={true}
                      selectedValues={multiList}
                      onSelect={multiSelectHandler}
                      onRemove={multiSelectRemoveHandler}
                      placeholder="Select the courses"
                      style={{
                        multiselectContainer: { width: '100%' },
                        highlightOption: { background: 'white' },
                        chips: { background: 'rgba(111, 38, 179, 0.596)' },
                        searchBox: {
                          border: 'none',
                          borderBottom: '1px solid rgba(111, 38, 179, 0.596)',
                          borderRadius: '0px',
                        },
                      }}
                    />
                    <div
                      className="errorMessage"
                      style={{ paddingLeft: '5px' }}
                    >
                      <ErrorMessage name="courses" />
                    </div>
                  </div>
                  <button type="submit" className="submitButton">
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Register;
