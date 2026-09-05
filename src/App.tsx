import { useState } from 'react'
import { Alert, Button, Toast, type ToastType } from '@apps-simples/ui'
import AppLayout from './layouts/AppLayout'
import './App.css'

const toastMessages: Record<ToastType, string> = {
  success: 'Dados salvos com sucesso.',
  info: 'Nova informação disponível.',
  warning: 'Revise os dados antes de continuar.',
  error: 'Não foi possível concluir a ação.',
}

export default function App() {
  const [activeToast, setActiveToast] = useState<ToastType | null>(null)
  const [showInfoAlert, setShowInfoAlert] = useState(true)

  return (
    <AppLayout appName="App Base" footer="Apps Simples">
      <h1>App Base</h1>
      <p>Base oficial dos Apps Simples</p>
      <div className="feedback-demo">
        <section className="feedback-demo__section" aria-labelledby="alerts-title">
          <h2 id="alerts-title">Alerts</h2>
          <Alert type="success" title="Success">Dados salvos com sucesso.</Alert>
          {showInfoAlert && (
            <Alert type="info" title="Info" dismissible onDismiss={() => setShowInfoAlert(false)}>
              Esta informação ficará disponível nesta tela.
            </Alert>
          )}
          <Alert type="warning" title="Warning">Revise os dados antes de continuar.</Alert>
          <Alert type="error" title="Error">Não foi possível carregar os dados.</Alert>
        </section>

        <section className="feedback-demo__section" aria-labelledby="toasts-title">
          <h2 id="toasts-title">Toasts</h2>
          <div className="toast-demo">
            <Button size="compact" onClick={() => setActiveToast('success')}>Mostrar Success</Button>
            <Button size="compact" variant="secondary" onClick={() => setActiveToast('info')}>Mostrar Info</Button>
            <Button size="compact" variant="secondary" onClick={() => setActiveToast('warning')}>Mostrar Warning</Button>
            <Button size="compact" variant="danger" onClick={() => setActiveToast('error')}>Mostrar Error</Button>
          </div>
        </section>
      </div>

      <Toast
        open={activeToast != null}
        type={activeToast ?? 'info'}
        message={activeToast ? toastMessages[activeToast] : ''}
        onClose={() => setActiveToast(null)}
      />
    </AppLayout>
  )
}
