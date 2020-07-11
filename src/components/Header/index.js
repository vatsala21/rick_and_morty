import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Formik } from 'formik';

const Header = (props) => {
  
  return (
    <>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Rick And Morty</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>

          <Formik
            initialValues={{ episodeName: '' }}
            onSubmit={(values, { setSubmitting }) => {
              props.onSearch(values.episodeName);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              resetForm
            }) => (
              <Form noValidate inline onSubmit={handleSubmit}>
                  <FormControl 
                    name="episodeName"
                    type="text" 
                    value={values.episodeName}
                    onChange={handleChange}
                    placeholder="Search Episode"
                    className="mr-sm-2" 
                  />
                  <Button type="submit" disabled={isSubmitting} variant="outline-info">Search</Button>
                  <Button 
                    onClick={() => { 
                      resetForm({values: '' })
                      props.onSearch('');
                    }}
                    disabled={isSubmitting} 
                    variant="outline-info"
                    style={{ marginLeft: 5 }}
                  >Reset
                  </Button>
                  
              </Form>
            )}
            </Formik>
      </Navbar>
    </>
  );
}

export default Header;
