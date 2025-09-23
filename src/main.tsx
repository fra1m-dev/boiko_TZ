//TODO: Начать делать тестовое задание
//TODO: Спомощью .gitignore зауигнорируй .env (он не должен отслеживаться), чтобы он не улетал в репозитори/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
