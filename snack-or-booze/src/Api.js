import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.
  You'll need to add to this class as you build features for the app.
*/


/** class SnackOrBoozeApi - a class to handle AJAX calls to the API
 * 
 * getSnacks: gets an array of all of the snacks found in the database
 *    Parameters: null
 *    Returns: an array of all of the snacks found in the database
 * 
 * getDrinks: gets an array of all of the drinks found in the database
 *    Parameters: null
 *    Returns: an array of all of the drinks found in the database
 * 
 * addItem: adds an item to the API for the given type of snack
 *    Parameters: an object of { id, type, name, description, recipe, serve }
 *    Returns: the data that was posted to the API
 *    - the return value is not used within the app
 */
class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  };

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  };

  static async addItem( { id, type, name, description, recipe, serve } ) {
    const data = { id, name, description, recipe, serve };

    if (type === 'drink') {
      const result = await axios.post(`${BASE_API_URL}/drinks`, data);
      return result.data;
    }
    const result = await axios.post(`${BASE_API_URL}/snacks`, data);
    return result.data;
  };

};

export default SnackOrBoozeApi;
