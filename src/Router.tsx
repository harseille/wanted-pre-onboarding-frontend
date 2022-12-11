import { Route, Routes } from 'react-router-dom';
import { AuthPage, TodoPage } from './pages';

const Router = () => (
  <Routes>
    <Route path="/" element={<AuthPage />} />
    <Route path="/todo" element={<TodoPage />} />
  </Routes>
);

export default Router;
