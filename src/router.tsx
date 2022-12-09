import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { AuthPage, TodoPage } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AuthPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Route>
  )
);

export default router;
