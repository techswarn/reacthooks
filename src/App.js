import "./App.css";
import Header from "./Components/Header";
import BookList from "./Components/BookList";
import ThemeToggle from "./Components/ThemeToggle";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
