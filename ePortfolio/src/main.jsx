import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx';
import CodeReview from './pages/CodeReview.jsx';
import Artifacts from './pages/Artifacts.jsx';
import NotFound from './pages/NotFound.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {path: '/', element: <Home />, errorElement: <NotFound />},
  {path: '/artifacts', element: <Artifacts />},
  {path: '/codereview', element: <CodeReview />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
