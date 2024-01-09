import React from "react";
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

function MyForm({ fields }) {
    const { Formik } = formik;

    const labels = fields.map(field => field.label);
    const types = fields.map(field => field.type);
    const initialValues = fields.reduce((acc, field) => {
        acc[field.label] = field.initialValue || '';
        return acc;
    }, {});

    const schema = yup.object().shape(
        labels.reduce((acc, label, index) => {
            const isNumberField = types[index] === 'number';
            const isDateField = types[index] === 'date';
            const field = fields[index];

            let validationChain = yup.string();

            if (field.required) {
                validationChain = validationChain.required('Value is required');
            }

            if (isNumberField) {
                validationChain = validationChain
                    .typeError('Value must be a number')
                    .min(1, 'Value must be greater than 0');
            }

            if (isDateField) {
                validationChain = validationChain
                    .nullable(true)
                    .transform((originalValue, originalObject) => {
                        // Transform empty string to null for proper handling
                        return originalValue === '' ? null : originalValue;
                    })
                    .when(['StartDate', 'EndDate'], {
                        is: (startDate, endDate) => startDate && endDate,
                        then: yup.date().min(yup.ref('StartDate'), 'End date must be after start date'),
                    });
            }

            acc[label] = validationChain;

            return acc;
        }, {})
    );

    const { handleSubmit, handleChange, values, touched, errors } = useFormik({
        validationSchema: schema,
        onSubmit: console.log,
        initialValues: { ...initialValues },
    });

    return (
        <Form noValidate onSubmit={handleSubmit} className="mx-5 my-3">
            {labels.map((label, index) => {
                const field = fields[index];
                const isTextArea = types[index] === 'textarea';
                const isDateField = types[index] === 'date';

                return (
                    <Row className="mb-3" key={index}>
                        <Form.Group as={Col} md="12" controlId={`validationFormik${index + 1}`}>
                            <Form.Label>{label}</Form.Label>
                            <InputGroup hasValidation>
                                {isDateField ? (
                                    <DatePicker
                                        selected={values[label]}
                                        onChange={(date) => handleChange({ target: { name: label, value: date } })}
                                        dateFormat="dd/MM/yyyy"
                                        className={`form-control ${touched[label] && errors[label] ? 'is-invalid' : ''}`}
                                    />
                                ) : (
                                    <Form.Control
                                        type={isTextArea ? undefined : types[index]}
                                        as={isTextArea ? 'textarea' : undefined}
                                        placeholder={field.placeholder || label}
                                        name={label}
                                        value={values[label]}
                                        onChange={handleChange}
                                        isInvalid={!!errors[label]}
                                    />
                                )}
                                <Form.Control.Feedback type="invalid">
                                    {errors[label]}
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                );
            })}

            <Buttons content={"Submit"} type="submit">Submit form</Buttons>
        </Form>
    );
}

export default MyForm;
