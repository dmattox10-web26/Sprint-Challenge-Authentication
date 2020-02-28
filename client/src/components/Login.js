import React from 'react';
import { Card, CardTitle, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup';

const Login = (props) => {
  const history = useHistory()

  const signUp = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
      .max(20, 'must be 20 characters or less')
      .required('Required'),
      password: Yup.string()
      .min(8, 'must be 8 characters or more')
      .required('Required'),
    }),
    onSubmit: values => {
        
    },
  });

  return (
      <div>
          <div className='spacer'></div>
          <Row>&nbsp;</Row>
          <Row>
            <Col xs='3'></Col>
            <Col xs='6'>
              <Card >
                <CardTitle style={{ margin: 'auto', fontWeight: 'bold', marginTop: '1rem', fontSize: '2rem' }} >Log In</CardTitle>
                <Col xs='12'>
                  <Form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                      <Label for='username'>Username</Label>
                      <Col xs='12'>
                        <Input
                            required
                            id='username'
                            name='username'
                            type='text'
                            placeholder='username'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.username}
                        />
                        {signUp.touched.username && signUp.errors.username ? <div>{signUp.errors.username}</div> : null}
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for='password'>Password</Label>
                      <Col xs='12'>
                        <Input
                            required
                            id='password'
                            name='password'
                            type='password'
                            placeholder='Your Password'
                            onChange={signUp.handleChange}
                            onBlur={signUp.handleBlur}
                            value={signUp.values.password}
                        />
                        {signUp.touched.password && signUp.errors.password ? <div>{signUp.errors.password}</div> : null}
                      </Col>
                    </FormGroup>
                    <Col xs='12'>
                      <Button type='submit'>Submit</Button>
                    </Col>
                    <br />
                  </Form>
                </Col>
              </Card>
            </Col>
            <Col xs='3'></Col>
          </Row>
      </div>
    )
  }

  export default Login