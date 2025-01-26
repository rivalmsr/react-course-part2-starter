import LoginStatus from './auth/LoginStatus';
import useCounterStore from './counter/store';
import { useTasks } from './task/TaskList';

const NavBar = () => {
  const { tasks } = useTasks();
  const counter = useCounterStore(s => s.counter);

  return (
    <nav className="navbar d-flex justify-content-between">
      <div>
        <span className="badge text-bg-secondary m-2">counter: {counter}</span>
        <span className="badge text-bg-secondary">{tasks.length}</span>
      </div>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
