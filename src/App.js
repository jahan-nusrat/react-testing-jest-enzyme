import Footer from "./components/Footer";
import MyComponent from "./components/MyComponent";
import Ticket from "./components/Ticket";
import './App.css'
import MyMainApp from "./components/Account/MyMainApp";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Ticket name='Count Count Count' />
      <Footer />
      <MyMainApp />
      <div></div>
    </div>
  );
}

export default App;
