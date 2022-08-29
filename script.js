// in Apps function parrameter I put variable that was made by object destructurisation and this object is props of App
const App = ({ initialButtonText }) => {
  // object destructurisation by useState, or we can say that here we create states for App functional component;  method of React object for creation new vars: buttonText and setButtonText, to use them later in arrow functions for second "App" function calling and since that changing real-DOM by "App" function JSX return

  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState("");

  const onButtonClick = () => {
    setButtonText("Now I green!");
    setClassesList("green-btn");
  };
  // here we return all that App functional component of virtual-Dom change in React and then that JSX compiling by Babel and in result we see new elements in real-DOM
  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" />);
