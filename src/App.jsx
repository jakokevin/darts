import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DartsListPage from './pages/DartsListPage'
import DartsSinglePage from './pages/DartsSinglePage'
import CreateDartsPage from './pages/CreateDartsPage'
import DartsModPage from './pages/DartsModPage'
import DartsDelPage from './pages/DartsDelPage'
import './App.css'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <h1 className="display-5 fw-bold mb-4">dartsozok nyilvantartasa</h1>
        <nav className="d-flex flex-wrap gap-2 border-bottom pb-3 mb-4">
          <Link className="btn btn-dark" to="/">dartsozok listaja</Link>
          <Link className="btn btn-primary" to="/new-darts">uj dartsozo</Link>
        </nav>
        <Routes>
          <Route path="/" element={<DartsListPage />} />
          <Route path="/darts/:dartsId" element={<DartsSinglePage />} />
          <Route path="/new-darts" element={<CreateDartsPage />} />
          <Route path="/mod-darts/:dartsId" element={<DartsModPage />} />
          <Route path="/del-darts/:dartsId" element={<DartsDelPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
