import React from "react"
import App from "./App.js"
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom"

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
