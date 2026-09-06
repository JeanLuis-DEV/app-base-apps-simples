import { useState } from 'react'
import {
  Alert,
  Button,
  Card,
  EmptyState,
  ErrorState,
  Input,
  Loading,
  Modal,
  NoResultsState,
  OptionGroup,
  Select,
  Toast,
  type ToastType,
} from '@apps-simples/ui'
import AppLayout from './layouts/AppLayout'
import './App.css'

type ModalExample = 'info' | 'confirmation' | 'form' | 'destructive'
type ToastFeedback = { type: ToastType; message: string }

const toastMessages: Record<ToastType, string> = {
  success: 'Alterações salvas com sucesso.',
  info: 'Há uma nova atualização disponível.',
  warning: 'Revise os dados antes de continuar.',
  error: 'Não foi possível concluir a ação.',
}

const optionItems = [
  { label: 'Diário', value: 'daily' },
  { label: 'Semanal', value: 'weekly' },
  { label: 'Mensal', value: 'monthly' },
]

export default function App() {
  const [toast, setToast] = useState<ToastFeedback | null>(null)
  const [activeModal, setActiveModal] = useState<ModalExample | null>(null)
  const [selectedOptions, setSelectedOptions] = useState({
    normal: 'weekly',
    required: '',
    helper: 'daily',
    error: '',
    disabled: 'monthly',
  })
  const [interactiveCardMessage, setInteractiveCardMessage] = useState(
    'O card interativo ainda não foi acionado.',
  )

  function updateOption(group: keyof typeof selectedOptions, value: string) {
    setSelectedOptions((current) => ({ ...current, [group]: value }))
  }

  function showToast(type: ToastType, message = toastMessages[type]) {
    setToast({ type, message })
  }

  function finishModal(type: ToastType, message: string) {
    setActiveModal(null)
    showToast(type, message)
  }

  return (
    <AppLayout appName="App Base" footer="Apps Simples — Design System oficial">
      <header className="demo-page__intro">
        <h1>Componentes oficiais</h1>
        <p>Referência visual e interativa do Design System Apps Simples.</p>
      </header>

      <div className="demo-page">
        <section className="demo-section" aria-labelledby="buttons-title">
          <div className="demo-section__heading">
            <h2 id="buttons-title">Buttons</h2>
            <p>Variantes, tamanho compacto e estados.</p>
          </div>
          <div className="demo-row">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button size="compact">Compact</Button>
            <Button disabled>Disabled</Button>
            <Button loading>Loading</Button>
          </div>
        </section>

        <section className="demo-section" aria-labelledby="fields-title">
          <div className="demo-section__heading">
            <h2 id="fields-title">Inputs e Selects</h2>
            <p>Campos normais, com orientação, erro e desabilitados.</p>
          </div>
          <div className="demo-grid demo-grid--fields">
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input
              label="E-mail"
              type="email"
              placeholder="nome@exemplo.com"
              helperText="Usaremos este endereço para contato."
            />
            <Input label="Código" defaultValue="ABC" error="Informe um código com 6 caracteres." />
            <Input label="Identificador" defaultValue="APP-001" disabled />

            <Select label="Categoria" defaultValue="">
              <option value="" disabled>Selecione uma categoria</option>
              <option value="personal">Pessoal</option>
              <option value="work">Trabalho</option>
            </Select>
            <Select label="Ordenação" defaultValue="recent" helperText="Você pode alterar depois.">
              <option value="recent">Mais recentes</option>
              <option value="oldest">Mais antigos</option>
            </Select>
            <Select label="Prioridade" defaultValue="" error="Selecione uma prioridade.">
              <option value="" disabled>Selecione</option>
              <option value="low">Baixa</option>
              <option value="high">Alta</option>
            </Select>
            <Select label="Status" defaultValue="active" disabled>
              <option value="active">Ativo</option>
            </Select>
          </div>
        </section>

        <section className="demo-section" aria-labelledby="options-title">
          <div className="demo-section__heading">
            <h2 id="options-title">OptionGroup</h2>
            <p>Seleções simples e seus principais estados.</p>
          </div>
          <div className="demo-grid demo-grid--options">
            <OptionGroup
              label="Frequência"
              options={optionItems}
              value={selectedOptions.normal}
              onChange={(value) => updateOption('normal', value)}
            />
            <OptionGroup
              label="Frequência obrigatória"
              options={optionItems}
              value={selectedOptions.required}
              onChange={(value) => updateOption('required', value)}
              required
            />
            <OptionGroup
              label="Período do resumo"
              options={optionItems}
              value={selectedOptions.helper}
              onChange={(value) => updateOption('helper', value)}
              helperText="Escolha quando deseja receber o resumo."
            />
            <OptionGroup
              label="Período com erro"
              options={optionItems}
              value={selectedOptions.error}
              onChange={(value) => updateOption('error', value)}
              error="Selecione uma das opções."
            />
            <OptionGroup
              label="Período desabilitado"
              options={optionItems}
              value={selectedOptions.disabled}
              onChange={(value) => updateOption('disabled', value)}
              disabled
            />
          </div>
        </section>

        <section className="demo-section" aria-labelledby="cards-title">
          <div className="demo-section__heading">
            <h2 id="cards-title">Cards</h2>
            <p>Variações para diferentes níveis de contexto e destaque.</p>
          </div>
          <div className="demo-grid demo-grid--cards">
            <Card><h3>Default</h3><p>Informação apresentada em um card padrão.</p></Card>
            <Card
              variant="interactive"
              onClick={() => setInteractiveCardMessage('Card interativo acionado com sucesso.')}
            >
              <h3>Interactive</h3>
              <p>Clique ou use Enter e Espaço para testar.</p>
            </Card>
            <Card variant="highlight"><h3>Highlight</h3><p>Conteúdo que merece maior destaque.</p></Card>
            <Card variant="alert"><h3>Alert</h3><p>Informação que exige atenção do usuário.</p></Card>
            <Card variant="compact"><h3>Compact</h3><p>Resumo curto em menor espaço.</p></Card>
          </div>
          <p className="demo-status" aria-live="polite">{interactiveCardMessage}</p>
        </section>

        <section className="demo-section" aria-labelledby="alerts-title">
          <div className="demo-section__heading">
            <h2 id="alerts-title">Alerts</h2>
            <p>Mensagens persistentes conforme o tipo de retorno.</p>
          </div>
          <div className="demo-stack">
            <Alert type="success" title="Tudo certo">Os dados foram salvos.</Alert>
            <Alert type="info" title="Informação">Uma atualização estará disponível amanhã.</Alert>
            <Alert type="warning" title="Atenção">Revise os dados antes de continuar.</Alert>
            <Alert type="error" title="Não foi possível salvar">Verifique sua conexão e tente novamente.</Alert>
          </div>
        </section>

        <section className="demo-section" aria-labelledby="toasts-title">
          <div className="demo-section__heading">
            <h2 id="toasts-title">Toasts</h2>
            <p>Acione uma notificação temporária.</p>
          </div>
          <div className="demo-row">
            <Button size="compact" onClick={() => showToast('success')}>Success</Button>
            <Button size="compact" variant="secondary" onClick={() => showToast('info')}>Info</Button>
            <Button size="compact" variant="secondary" onClick={() => showToast('warning')}>Warning</Button>
            <Button size="compact" variant="danger" onClick={() => showToast('error')}>Error</Button>
          </div>
        </section>

        <section className="demo-section" aria-labelledby="loading-title">
          <div className="demo-section__heading">
            <h2 id="loading-title">Loading</h2>
            <p>Tamanhos inline e carregamento de seção sem bloquear a página.</p>
          </div>
          <div className="demo-row demo-row--loading">
            <Loading size="small" label="Carregando item" />
            <Loading label="Carregando dados" />
            <Loading size="large" label="Carregando relatório" />
          </div>
          <div className="demo-loading-section">
            <Loading mode="section" label="Atualizando conteúdo" />
          </div>
        </section>

        <section className="demo-section" aria-labelledby="states-title">
          <div className="demo-section__heading">
            <h2 id="states-title">Estados</h2>
            <p>Ausência de dados, busca sem resultado e falha de carregamento.</p>
          </div>
          <div className="demo-grid demo-grid--states">
            <Card>
              <EmptyState
                icon="＋"
                title="Nenhum item cadastrado"
                description="Adicione seu primeiro item para começar."
                action={<Button size="compact">Adicionar item</Button>}
              />
            </Card>
            <Card>
              <NoResultsState
                icon="⌕"
                title="Nenhum resultado"
                description="Tente ajustar os termos da busca."
                action={<Button size="compact" variant="secondary">Limpar busca</Button>}
              />
            </Card>
            <Card>
              <ErrorState
                icon="!"
                title="Falha ao carregar"
                description="Tente novamente em alguns instantes."
                action={<Button size="compact" variant="danger">Tentar novamente</Button>}
              />
            </Card>
          </div>
        </section>

        <section className="demo-section" aria-labelledby="modals-title">
          <div className="demo-section__heading">
            <h2 id="modals-title">Modal</h2>
            <p>Exemplos fechados por padrão, com foco e teclado gerenciados pelo Design System.</p>
          </div>
          <div className="demo-row">
            <Button onClick={() => setActiveModal('info')}>Informativo</Button>
            <Button variant="secondary" onClick={() => setActiveModal('confirmation')}>Confirmação</Button>
            <Button variant="secondary" onClick={() => setActiveModal('form')}>Formulário</Button>
            <Button variant="danger" onClick={() => setActiveModal('destructive')}>Destrutivo</Button>
          </div>
        </section>
      </div>

      <Toast
        open={toast != null}
        type={toast?.type ?? 'info'}
        message={toast?.message ?? ''}
        onClose={() => setToast(null)}
      />

      <Modal
        open={activeModal === 'info'}
        onClose={() => setActiveModal(null)}
        title="Sobre esta demonstração"
        footer={<Button onClick={() => setActiveModal(null)}>Entendi</Button>}
      >
        <p>Esta página reúne os componentes oficiais disponíveis no App Base.</p>
      </Modal>

      <Modal
        open={activeModal === 'confirmation'}
        onClose={() => setActiveModal(null)}
        title="Confirmar alteração"
        footer={
          <>
            <Button variant="ghost" onClick={() => setActiveModal(null)}>Cancelar</Button>
            <Button onClick={() => finishModal('success', 'Alteração confirmada com sucesso.')}>Confirmar</Button>
          </>
        }
      >
        <p>Deseja aplicar esta alteração agora?</p>
      </Modal>

      <Modal
        open={activeModal === 'form'}
        onClose={() => setActiveModal(null)}
        title="Adicionar contato"
        footer={
          <>
            <Button variant="ghost" onClick={() => setActiveModal(null)}>Cancelar</Button>
            <Button type="submit" form="contact-demo-form">Salvar</Button>
          </>
        }
      >
        <form
          id="contact-demo-form"
          onSubmit={(event) => {
            event.preventDefault()
            finishModal('success', 'Contato salvo para demonstração.')
          }}
        >
          <Input label="Nome do contato" name="contactName" required autoComplete="name" />
        </form>
      </Modal>

      <Modal
        open={activeModal === 'destructive'}
        onClose={() => setActiveModal(null)}
        title="Excluir item"
        footer={
          <>
            <Button variant="ghost" onClick={() => setActiveModal(null)}>Cancelar</Button>
            <Button variant="danger" onClick={() => finishModal('info', 'Exclusão simulada; nenhum dado foi alterado.')}>Excluir</Button>
          </>
        }
      >
        <p>Esta demonstração não exclui dados reais. Deseja simular a ação?</p>
      </Modal>
    </AppLayout>
  )
}
