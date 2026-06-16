import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Sobre from './pages/Sobre'
import Academico from './pages/Academico'
import Nutshells from './pages/Nutshells'

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
