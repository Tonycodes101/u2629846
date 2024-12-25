import MyGreetingApp from './src/App';


function GreetingElement() {
  const greeting = 'Hello, Let’s start learning function Component...';
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default GreetingElement;
