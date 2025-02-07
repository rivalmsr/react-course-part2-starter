import './App.css';
import AuthProvider from './state-management/auth/AuthProvider';
import { Counter } from './state-management/counter';
import HomePage from './state-management/HomePage';
import NavBar from './state-management/NavBar';
import { TasksProvider } from './state-management/task';

function App() {

  return (
    <AuthProvider>
      <TasksProvider>
        <Counter />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>

  )
    ;
}

export default App;
