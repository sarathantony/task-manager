import React from "react"
import App from "./App.js"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
