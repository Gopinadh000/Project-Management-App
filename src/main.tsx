import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesWrapper from "./routes/RoutesWrapper.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from "./services/redux/store/store.ts";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
    <Provider store={store}>
    <RoutesWrapper />
    </Provider>
    </BrowserRouter>
);
