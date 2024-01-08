import React,{ useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Buttons from "./buttons";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormik } from 'formik';

function MyForm() {
    const { Formik } = formik;
    const [fieldValues, setFieldValues] = useState({
            Title: '',
            Income_Information: '',
            Fixed_Expenses: '',
            Variable_Expenses: '',
            Irregular_Expenses: '',
            Emergency_Fund: '',
            Taxes: '',
            Financial_Goals: '',
            More_Description: '',
            StartDate: null,
            EndDate: null,
    });
    const schema = yup.object().shape({
        Title:yup.string().required(),
        Income_Information: yup.number().required().min(1, 'Value must be greater than 0'),
        Fixed_Expenses: yup.number().required().min(0, 'Value must be greater than or equal to 0'),
        Variable_Expenses: yup.number().min(0, 'Value must be greater than or equal to 0'),
        Irregular_Expenses: yup.number().min(0, 'Value must be greater than or equal to 0'),
        Emergency_Fund: yup.number().min(0, 'Value must be greater than or equal to 0'),
        Taxes: yup.number().min(0, 'Value must be greater than or equal to 0'),
        Financial_Goals: yup.string().required(),
        More_Description: yup.string(),
        StartDate: yup.string().required('Start date is required'),
        EndDate: yup.string().min(yup.ref('StartDate'), 'End date must be after start date').required('End date is required'),
    });

    return (
    <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{fieldValues}}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationFormik01">
                    <Form.Label>Title</Form.Label>
                    <InputGroup hasValidation>
                    <Form.Control
                        type="text"
                        placeholder="Title"
                        name="Title"
                        value={values.Title}
                        onChange={handleChange}
                        isInvalid={!!errors.Title}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.username}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik02">
                    <Form.Label> Financial_Goals</Form.Label>
                    <InputGroup hasValidation>
                    <Form.Control
                        as="textarea"
                        placeholder="Financial_Goals"
                        name="Financial_Goals"
                        value={values.Financial_Goals}
                        onChange={handleChange}
                        isInvalid={!!errors.Financial_Goals}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.Financial_Goals}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik03">
                    <Form.Label> Income_Information</Form.Label>
                    <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control
                        type="Number"
                        placeholder="4592"
                        aria-describedby="inputGroupPrepend"
                        name="Income_Information"
                        value={values.Income_Information}
                        onChange={handleChange}
                        isInvalid={!!errors.Income_Information}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.Income_Information}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik04">
                    <Form.Label> Fixed_Expenses</Form.Label>
                    <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control
                        type="Number"
                        placeholder="4592"
                        aria-describedby="inputGroupPrepend"
                        name="Fixed_Expenses"
                        value={values.Fixed_Expenses}
                        onChange={handleChange}
                        isInvalid={!!errors.Fixed_Expenses}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.Fixed_Expenses}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik05">
                    <Form.Label> Variable_Expenses</Form.Label>
                    <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control
                        type="Number"
                        placeholder="4592"
                        aria-describedby="inputGroupPrepend"
                        name="Variable_Expenses"
                        value={values.Variable_Expenses}
                        onChange={handleChange}
                        isInvalid={!!errors.Variable_Expenses}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.Variable_Expenses}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationFormik06">
                    <Form.Label> Irregular_Expenses</Form.Label>
                    <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control
                        type="Number"
                        placeholder="4592"
                        aria-describedby="inputGroupPrepend"
                        name="Irregular_Expenses"
                        value={values.Irregular_Expenses}
                        onChange={handleChange}
                        isInvalid={!!errors.Irregular_Expenses}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.Irregular_Expenses}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik07">
                    <Form.Label> Emergency_Fund</Form.Label>
                    <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control
                        type="Number"
                        placeholder="4592"
                        aria-describedby="inputGroupPrepend"
                        name="Fixed_Expenses"
                        value={values.Emergency_Fund}
                        onChange={handleChange}
                        isInvalid={!!errors.Emergency_Fund}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.Emergency_Fund}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik08">
                    <Form.Label> Taxes</Form.Label>
                    <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control
                        type="Number"
                        placeholder="4592"
                        aria-describedby="inputGroupPrepend"
                        name="Taxes"
                        value={values.Taxes}
                        onChange={handleChange}
                        isInvalid={!!errors.Taxes}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.Taxes}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>

                <Row className="mb-3 mt-4">
                    <Form.Group as={Col} md="6" controlId="validationFormik10">
                    <Form.Label>Start Date</Form.Label>
                    <DatePicker
                        selected={values.StartDate}
                        onChange={(date) => handleChange({ target: { name: 'StartDate', value: date } })}
                        dateFormat="dd/MM/yyyy"
                        className={`form-control ${touched.StartDate && errors.StartDate ? 'is-invalid' : ''}`}
                    />
                    {touched.StartDate && errors.StartDate &&
                        <Form.Control.Feedback type="invalid">
                        {errors.StartDate}
                        </Form.Control.Feedback>
                    }
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationFormik11">
                    <Form.Label>End Date</Form.Label>
                    <DatePicker
                        selected={values.EndDate}
                        onChange={(date) => handleChange({ target: { name: 'EndDate', value: date } })}
                        dateFormat="dd/MM/yyyy"
                        className={`form-control ${touched.EndDate && errors.EndDate ? 'is-invalid' : ''}`}
                    />

                        <Form.Control.Feedback type="invalid">
                        {errors.EndDate}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} md="12" controlId="validationFormik09" className="mb-5">
                    <Form.Label>More_Description </Form.Label>
                    <InputGroup hasValidation>
                    <Form.Control
                        as="textarea"
                        placeholder="More_Description"
                        name="More_Description"
                        value={values.More_Description}
                        onChange={handleChange}
                        isInvalid={!!errors.More_Description}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.More_Description}
                    </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            
            <Buttons content={"Submit"} type="submit">Submit form</Buttons>
        </Form>
        )}
    </Formik>
    );
    }
  
export default MyForm;