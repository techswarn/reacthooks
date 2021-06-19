import "./App.css";
import Header from "./Components/Header";
import BookList from "./Components/BookList";
import ThemeContextProvider from "./Contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
