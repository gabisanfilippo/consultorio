import Routes from '../src/routes'
import AuthContext from './contexts/authContext'

function App() {
  return (
    <>
      <AuthContext>
        <Routes />
      </AuthContext>
    </>
  )
}

export default App
