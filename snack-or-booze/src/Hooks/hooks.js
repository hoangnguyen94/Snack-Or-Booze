import React, { useState } from "react";

const initialState = {
    type: "",
    name: "",
    description: "",
    recipe: "",
    serve: ""
};


/** useFormHandler
 * 
 * Description:
 *      - initializes state for the form (formData)
 *      - updates state for the form (handleChange)
 *      - handles form submission (handleSubmit)
 * 
 * Parameters:
 *      - evt: an event object passed when the form is submitted 
 *             and when changes are made to the form
 *      
 *      - addSnacksAndDrinks: a function passed as a prop that is 
 *                            used to update the state of the App 
 *                            component, and submits the data to the API.
 * 
 * Returns:
 *      An array of [formData, handleChange, handleSubmit]
 */

const useFormHandler = () => {
    const [formData, setFormData] = useState(initialState);
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(formData => ({...formData, [name]: value}));
    };

    const handleSubmit = async(evt, addSnacksAndDrinks) => {
        const finalFormData = {...formData, id: formData.name.toLowerCase()};
        evt.preventDefault();
        await addSnacksAndDrinks(finalFormData);
        setFormData(formData => initialState);
    };
    return [formData, handleChange, handleSubmit];
};

export { useFormHandler };