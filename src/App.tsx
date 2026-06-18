import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Sobre from './pages/Sobre'
import Academico from './pages/Academico'
import Publicacoes from './pages/Publicacoes'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="/academico" element={<Academico />} />
        <Route path="/publicacoes" element={<Publicacoes />} />
      </Routes>
    </Layout>
  )
}
