import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Sobre from './pages/Sobre.jsx'
import Academico from './pages/Academico.jsx'
import Nutshells from './pages/Nutshells.jsx'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/academico" element={<Academico />} />
        <Route path="/nutshells" element={<Nutshells />} />
      </Routes>
    </Layout>
  )
}
