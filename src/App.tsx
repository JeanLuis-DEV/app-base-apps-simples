import AppLayout from './layouts/AppLayout'
import { version } from '../package.json'
import './App.css'

export default function App() {
  return (
    <AppLayout appName="App Base" footer={`Apps Simples — Design System oficial — v${version}`}>
      <section className="starter-page" aria-labelledby="starter-title">
        <h1 id="starter-title">Novo App Simples</h1>
        <p>Use este espaço para iniciar a implementação do aplicativo.</p>
      </section>
    </AppLayout>
  )
}
