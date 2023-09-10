import React from "react";
import { Provider } from "react-redux";
import store from "./store"
import Players from "./components/player/Players";
import SelectedTeam from "./components/SelectedTeam"; 





const App =() =>(
  <Provider store={store}>
  <main>
    <h1>FutballTeam</h1>
    <Players/>
    <SelectedTeam/>
  </main>
  </Provider>
)

export default App;
