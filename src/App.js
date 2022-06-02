import Hero from "./components/Hero/Hero";
import SearchForm from "./components/SearchForm/SearchForm";
import List from "./components/List/List";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";


const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </>
  );
};

export default App;