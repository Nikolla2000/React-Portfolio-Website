import { useState } from "react"
import { Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FormBuilder = ({ configurations, setErrorMsg, setFocusedInput } ) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});

    //Function which tracks the value of each input in a state
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

    const validateForm = () => {
        const {firstName, lastName, email, subject, message} = formData;
        const validationErrors = {};

        //Validate firstName field
        if (!firstName || firstName.length < 2 || firstName.length > 20) {
            validationErrors.name = "First name is required and should be between 2 and 20 characters";
            setErrorMsg(validationErrors.name);
        }

        //Validate lastName field
        if (!lastName || lastName.length < 2 || lastName.length > 20) {
            validationErrors.name = "Last name is required and should be between 2 and 20 characters";
            setErrorMsg(validationErrors.name);
        }

        //Validate email field
        if (!email) {
            validationErrors.email = "Email is required and should be a valid email address"
            setErrorMsg(validationErrors.email);
        }

        //Validate subject field
        if (!subject || subject.length < 5 || subject.length > 100) {
            validationErrors.subject = "Subject is required and should be between 5 and 100 characters"
            setErrorMsg(validationErrors.subject);
        }

        //Validate message fields
        if(!message || message.length < 10 || message.length > 500) {
            validationErrors.message = "Message is required and should be between 10 and 500 characters"
            setErrorMsg(validationErrors.message)
        }

        setErrors(validationErrors);
        return Object.keys(errors).length === 0;
    }

    //Form Submit Function
    const onSubmit = (event) => {
        event.preventDefault()
        if(validateForm()){
            console.log(formData);
            setFormData({})
        }
    }

    const onFocus = (event) => {
        setFocusedInput(event.target.name)
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
                    onChange={handleInputChange}
                    onFocus={onFocus}/>
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
                    onChange={handleInputChange}
                    onFocus={onFocus}/>
            ))}
            {/* <p className="error-message">error</p> */}
        </Form>
    )
}

export default FormBuilder