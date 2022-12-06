import GlobalStyle from './styles/GlobalStyle';
import Routes from './Routes/index'
import {AuthProvider} from './Contexts/AuthContext'
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <GlobalStyle/>
      <Routes/>
      </AuthProvider>
    </div>
  );
}

export default App;