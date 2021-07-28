import Login from './containers/Login'
import './App.css'

import Welcome from './containers/Welcome'
import useSession from './hooks/useSession';
import { useStore } from './stores/store';

function App() {
  const { title, description } = useStore()
  const session = useSession()

  return (
    <div className="App">

      {session ? <Welcome session={session} description={description} title={title} /> : <Login />}
    </div>
  );
}

export default App;
