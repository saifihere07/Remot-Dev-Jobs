import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookmarksContextProvider from "./components/contexts/BookmarksContextProvider.tsx";
import ActiveIdContextProvider from "./components/contexts/ActiveIdContextProvider.tsx";
import JobItemsandSearchTextContextProvider from "./components/contexts/JobItemsandSearchTextContextProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BookmarksContextProvider>
        <ActiveIdContextProvider>
          <JobItemsandSearchTextContextProvider>
            <App />
          </JobItemsandSearchTextContextProvider>
        </ActiveIdContextProvider>
      </BookmarksContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
