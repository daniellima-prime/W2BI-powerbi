// src/App.tsx
import React from 'react'

function App() {
  return (
    <iframe
      title="Power BI Report"
      src="https://app.powerbi.com/view?r=eyJrIjoiNTE0MDkzYWQtNGQ2OC00Zjg3LTkxODktN2U1NDQzMzkwZTZhIiwidCI6ImJmNDQ1ODhhLTk2NDQtNGZmMC05ZjRiLTU4ZGMwMzdjZDJmNiJ9"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
      frameBorder="0"
      allowFullScreen
    ></iframe>
  )
}

export default App
