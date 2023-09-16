import { useState, useEffect } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FormBuilder = ({ configurations, errorMsg, setErrorMsg } ) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    // Function which splits the field name by camelCase or underscore and join with space
    const formatFieldName = (fieldName) => {
        return fieldName.split(/(?=[A-Z])|_/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    // const validateForm = () => {
    //     const {firstName, lastName, email, subject, message}
    // }

    const onSubmit = (event) => {
        event.preventDefault()
        setErrorMsg('big error')
        console.log(formData);
    }

    return (
        <Form onSubmit={onSubmit} id="contact-form">
            {configurations.map((inputData, index) => inputData.label ?
             (<FormGroup controlId={inputData.name}>
                <FormLabel>{inputData.label}</FormLabel>
                <FormControl 
                    key={index + 1}
                    type={inputData.type} 
                    name={inputData.name} 
                    id={inputData.name} 
                    as={inputData.type === 'textarea' && 'textarea'}
                    placeholder={formatFieldName(inputData.name)}
                    minLength={inputData.minLength && inputData.minLength}
                    maxLength={inputData.maxLength && inputData.maxLength}
                    value={formData[inputData.name] || ''}
                    onChange={handleInputChange}/>
             </FormGroup>) 
             : (
                <FormControl 
                    key={index + 1}
                    type={inputData.type} 
                    name={inputData.name} 
                    id={inputData.name} 
                    as={inputData.type === 'textarea' ? 'textarea' : undefined}
                    placeholder={formatFieldName(inputData.name)}
                    minLength={inputData.minLength && inputData.minLength}
                    maxLength={inputData.maxLength && inputData.maxLength}
                    value={formData[inputData.name] || ''}
                    onChange={handleInputChange}/>
            ))}
            {/* <p className="error-message">error</p> */}
        </Form>
    )
}

export default FormBuilder