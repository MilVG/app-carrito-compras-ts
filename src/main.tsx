import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.tsx'
import './index.css'
import LearnUsestate from './learnHooks/LearnUsestate.tsx'
import LearnUseeffect from './learnHooks/LearnUseeffect.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LearnUsestate />
    <LearnUseeffect />
  </React.StrictMode>,
)
