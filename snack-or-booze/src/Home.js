import React, { useContext } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import AppContext from "./AppContext";


/** Changes made to this component:
 *    1). Used useContext to get data from the parent component,
 *        which was used to set the message on the homepage.
 */
function Home() {
  const { numSnacks, numDrinks, message } = useContext(AppContext);
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
            <p>{message}</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;