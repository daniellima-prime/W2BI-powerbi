// api/powerbi.ts
// Função serverless para redirecionar ao Power BI de forma segura
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  // A URL vem da variável de ambiente POWERBI_URL configurada na Vercel
  const POWERBI_URL = process.env.POWERBI_URL

  if (!POWERBI_URL) {
    res.status(500).send('Variável de ambiente POWERBI_URL não configurada.')
    return
  }

  // Faz o redirecionamento (sem expor o link no código-fonte)
  res.redirect(302, POWERBI_URL)
}
