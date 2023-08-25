import { useState, useEffect } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap"

const FormBuilder = ({ configurations, focusedInput, setFocusedInput } ) => {
    const [formData, setFormData] = useState({})

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (event.target.tagName !== "INPUT" && event.target.tagName !== "TEXTAREA") {
                setFocusedInput("");
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevValues) => ({
            ...prevValues,
            [name]: value
        }))
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(formData);
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
                    placeholder={inputData.name.charAt(0).toUpperCase() + inputData.name.slice(1)}
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
                    placeholder={inputData.name.charAt(0).toUpperCase() + inputData.name.slice(1)}
                    minLength={inputData.minLength && inputData.minLength}
                    maxLength={inputData.maxLength && inputData.maxLength}
                    value={formData[inputData.name] || ''}
                    onChange={handleInputChange}
                    onFocus={onFocus}/>
            ))}
        </Form>
    )
}

export default FormBuilder