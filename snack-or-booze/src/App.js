import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import Form from "./NewItemForm";
import AppConText from "./AppContext";

/** Changes made to this component:
 *    1). Added state for drinks
 *    2). Made API calls / set state for drinks
 *        with useEffect.
 *    3). Created a message to let users know how
 *        many snacks and drinks there are.
 *    4). Added a context provider to pass the message
 *        to the Home component without adding another prop.
 *    5). Added three routes:
 *          - /drinks
 *          - /drinks/:id
 *          - /add
 */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [ drinks, setDrinks ] = useState( [] );

  const addSnacksAndDrinks = async ( newSnack ) =>
  {
    if ( newSnack.type === "snack" )
    {
      setSnacks( snacks => [ ...snacks, newSnack ] );
    } else
    {
      setDrinks( drinks => [ ...drinks, setDrinks ] );
    };
    await SnackOrBoozeApi.addItem( newSnack );
  };

  useEffect(() => {
    async function getSnacksAndDrinks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();

      setSnacks( snacks );
      setDrinks( drinks );
      setIsLoading(false);
    }
    getSnacksAndDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  const numSnacks = snacks.length;
  const numDrinks = drinks.length;
  return (
    <AppConText.Provider value={{numSnacks, numDrinks, message}}>
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu snacks={snacks} title="Snacks Menu" resource="snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu snacks={drinks} title="Drinks Menu" resource="drinks" />
            </Route>
            <Route exact path="/add">
              <Form addSnacksAndDrinks={addSnacksAndDrinks} />
            </Route>  
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route path="/snacks/:id">
              <Snack items={snacks} cantFind="/snacks" />
            </Route>
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
        </BrowserRouter>
      </div>
      </AppConText.Provider>
  );
}

export default App;
