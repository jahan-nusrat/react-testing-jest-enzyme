import Footer from "./components/Footer";
import MyComponent from "./components/MyComponent";
import Ticket from "./components/Ticket";
import './App.css'
import MyMainApp from "./components/Account/MyMainApp";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Ticket name='Count Count Count' />
      <Footer />
      <MyMainApp />
      <Users />
    </div>
  );
}

export default App;
