import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./NewFormItem.css";
import { useFormHandler } from "./Hooks/hooks";


/** A form component that is used to add an item to the database
 * 
 * Parameters: 
 *      - addSnacksAndDrinks: a function used to update the state
 *                            of the App component, and also to 
 *                            post the data to the API.
 */
const NewItemForm = ({ addSnacksAndDrinks }) => {
    const [formData, handleChange, handleSubmit] = useFormHandler();

    return (
        <Card>
         <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add a New Snack or Drink!
          </CardTitle>
          <form onSubmit={evt => handleSubmit(evt, addSnacksAndDrinks)}>
              <label htmlFor="type">Type of Item</label>
              <input
                type="text"
                id="type"
                name="type"
                value={formData.type}
                placeholder='Enter "snack" or "drink"'
                onChange={handleChange}
                required  
              />
              <label htmlFor="name">Name of Item</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="i.e. Mojito, etc."
                onChange={handleChange}
                required  
              />
              <label htmlFor="description">Description of Item</label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                placeholder="i.e. a tasty frozen treat"
                onChange={handleChange}
                required  
              />
              <label htmlFor="recipe">Item Recipe</label>
              <input
                type="text"
                id="recipe"
                name="recipe"
                value={formData.recipe}
                placeholder="Enter a Brief Recipe"
                onChange={handleChange}
                required  
              />
              <label htmlFor="serve">Serving Style</label>
              <input
                type="text"
                id="serve"
                name="serve"
                value={formData.serve}
                placeholder="i.e. Shaken, not Stirred"
                onChange={handleChange}
                required  
              />
              <button type="submit">Submit</button>
          </form>
        </CardBody>
      </Card>
    );
};

export default NewItemForm;