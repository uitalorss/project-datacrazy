import { UserContextProvider } from "./contexts/UserContext";
import { Main } from "./pages";
import { GlobalStyled } from "./styles/global";

function App() {
  return (
    <>
      <UserContextProvider>
        <Main />
      </UserContextProvider>
      <GlobalStyled />
    </>
  );
}

export default App;
