import React, { Fragment, useState, useCallback } from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import { ValidateFormContact } from "../../pages/validate-form/ValidateContact";
import Select from 'react-select';
import { useDropzone } from 'react-dropzone'

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './sty.css'


const positions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },]

function FormEmp() {

  const [selectedOption, setSelectedOption] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const [value, setValue] = React.useState(null);

  return (
    <>
      <Fragment>
        <div className="card">
          <div className="card-header">ค้นหาข้อมูล</div>
          <div className="card-body"><Formik
            enableReinitialize={true}
            initialValues={{ name: '', email: '', subject: '', message: '', phoneNumber: '', status: '' }}
            validationSchema={ValidateFormContact}
            onSubmit={(values) => {
              let data = { ...values };
              console.log('data : ' + JSON.stringify(data))
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit} className="php-email-form">

                <div className="row">

                  <div className="col-3">
                    <div className="dropzone">
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {
                        isDragActive ?
                          <p>Drop the files here ...</p> :
                          <p>Drag 'n' drop some files here, or click to select files</p>
                      }
                    </div>

                    </div>
                    
                  </div>


                  <div className="col-9 row">

                    <div className="form-group col-md-4">
                      <label htmlFor="name">คำนำหน้าชื่อ(TH)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={positions}
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">ชื่อ(TH)</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="ชื่อ"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">นามสกุล(TH)</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="สกุล"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">คำนำหน้าชื่อ(EN)</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={positions}
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">ชื่อ(EN)</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="ชื่อ"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">นามสกุล(EN)</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="สกุล"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">วันเดือนปีเกิด</label>
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                            label="Basic example"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">อายุ</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="สกุล"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">สัญชาติ</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={positions}
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">โทรศัพท์</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="สกุล"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                    <div className="form-group col-md-4">
                      <label htmlFor="name">อีเมล</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="สกุล"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary">บันทึก</button>{" "}
                    <button type="reset" className="btn btn-secondary">ล้างข้อมูล</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik></div>
        </div>
      </Fragment>

      <Fragment>
        <div className="card">
          <div className="card-body"><Formik
            enableReinitialize={true}
            initialValues={{ name: '', email: '', subject: '', message: '', phoneNumber: '', status: '' }}
            validationSchema={ValidateFormContact}
            onSubmit={(values) => {
              let data = { ...values };
              console.log('data : ' + JSON.stringify(data))
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit} className="php-email-form">
                <div className="col-12 row">

                  <div className="row form-group col-md-4">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">ชื่อ(TH)</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="ชื่อ"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <label htmlFor="name">นามสกุล(TH)</label>
                      <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                        placeholder="สกุล"
                      />
                      <ErrorMessage
                        name='name'
                        component='div'
                        className='invalid-feedback'
                      />
                    </div>
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">คำนำหน้าชื่อ(EN)</label>
                    <Select
                      defaultValue={selectedOption}
                      onChange={setSelectedOption}
                      options={positions}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ(EN)</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                      placeholder="ชื่อ"
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ(EN)</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                      placeholder="ชื่อ"
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ(EN)</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                      placeholder="ชื่อ"
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ(EN)</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                      placeholder="ชื่อ"
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ(EN)</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                      placeholder="ชื่อ"
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ(EN)</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                      placeholder="ชื่อ"
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label htmlFor="name">ชื่อ(EN)</label>
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={"form-control" + (errors.name && touched.name ? " is-invalid" : "")}
                      placeholder="ชื่อ"
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='invalid-feedback'
                    />
                  </div>
                </div>
              </Form>
            )}
          </Formik></div>
        </div>
      </Fragment>


    </>
  )
}

export default FormEmp