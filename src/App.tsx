import { BrowserRouter } from 'react-router-dom';
import TodoProvider from './store/todo/TodoProvider';
import Router from './Router';

const App = () => (
  <BrowserRouter>
    <TodoProvider>
      <Router />
    </TodoProvider>
  </BrowserRouter>
);

export default App;
