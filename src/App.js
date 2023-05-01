import { Provider } from "react-redux";
import GlobalContextProvider from "./Hook/GlobalContext";
import "./index.css";
import Myroutes from "./Myroutes";
import { myStore } from "./Hook/Redux/store";
import { combineReducers, createStore } from "redux";
import gameReducer from "./Hook/Redux/gameReducer";
import counterReducer from "./Hook/Redux/counterReducer";

function App() {
  const rootreducer=combineReducers({
    counter: counterReducer,
    game: gameReducer
  }
    )
  const myStore = createStore(rootreducer)
  // const myStore=createStore(counterReducer)

  // const gameStore = createStore(gameReducer)
  return (
    <>
      <Provider store={myStore}  >
        <GlobalContextProvider>
          <Myroutes />
        </GlobalContextProvider>
      </Provider>

    </>
  );
}

export default App;
