import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import About from "./pages/About.tsx";
import ErrorPage from "./pages/errors/error_page.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Layout from "./Layout.tsx";

// Whenever I have time for auth
// import { ClerkProvider } from "@clerk/clerk-react";

// if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }
// const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "portfolio",
    element: (
      <Layout>
        <Portfolio />
      </Layout>
    ),
  },
]);

// function ClerkProviderWithRoutes() {
//   const navigate = useNavigate();

//   return (
//     <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Layout>
//               <Home />
//             </Layout>
//           }
//           errorElement={<ErrorPage />}
//         />
//         <Route
//           path="/about"
//           element={
//             <Layout>
//               <About/>
//             </Layout>
//           }
//         />
//       </Routes>
//     </ClerkProvider>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
