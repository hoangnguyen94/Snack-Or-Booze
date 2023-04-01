### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  It is used to make it easy to switch between routes for single page applications.

- What is a single page application?
  One that stays the same and has the user make choices that dynamically update the front end.

- What are some differences between client side and server side routing?
  In server side routing, requests are always being sent back to the server for any change the user wants to make. In client side routing, that request is only made once when the server starts, and then the client side updates dynamically, typically dependent upon user input.

- What are two ways of handling redirects with React Router? When would you use each?
  1. Using the component. Use this if you don't care about whether or not the user should be able to go back to the previous page.

  2. Using the useHistory hook. Use this to have a more traditional experience, where the back button can still be used to access the previous content.

- What are two different ways to handle page-not-found user experiences using React Router? 
  1. Create a component for page-not-found and add to the last of the router in side of the Switch
  2. Use the Redirect component provided by React Router. You can define a redirect rule that redirects all unmatched routes to a specific route, which can be a custom "Page not found" page.
  
- How do you grab URL parameters from within a component using React Router?
  We get URL parameters by using the useParams hook from react-router-dom.

- What is context in React? When would you use it?
  Context is a way to prevent prop drilling. It allows us to share information as props to multiple, nested child components.

- Describe some differences between class-based components and function
  components in React.
  Class based components have a constructor, they are instance based, they require method binding inside of the constructor, and they inherit from React.Component. Function based components use more modern hooks like useState instead of creating a state object in a constructor. Function based components use things like "useEffect" to update state, whereas class based components use componentDidMount, componentWillUnmount, componentDidUpdate, etc.

- What are some of the problems that hooks were designed to solve?
  Hooks make it easy to use React features from a function call instead of writingmethods like componentDidMount. They also make it easier to manage state, get URL parameters, and to use context.