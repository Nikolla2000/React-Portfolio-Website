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
                    placeholder={inputData.name.charAt(0).toUpperCase() + inputData.name.slice(1)}
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
                    placeholder={inputData.name.charAt(0).toUpperCase() + inputData.name.slice(1)}
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