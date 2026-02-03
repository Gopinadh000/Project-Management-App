import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./services/redux/store/store.ts";
import { AuthProvider } from "./services/context/AuthContext.tsx";
import { ThemeProvider } from "./services/context/ThemeContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
