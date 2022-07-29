import MainLayout from "./layouts/main";
import ItemDetails from "./pages/ItemDetails";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <MainLayout>
        <ItemDetails />
      </MainLayout>
    </Provider>
  );
}

export default App;
