import { initThemeMode } from "flowbite-react";
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/main.css'

createRoot(document.getElementById('root')!).render(<App />)

initThemeMode();
