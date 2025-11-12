// api/powerbi.ts
// Função serverless que redireciona para o Power BI
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Pega a URL do Power BI da variável de ambiente
  const POWERBI_URL = process.env.POWERBI_URL

  if (!POWERBI_URL) {
    res.status(500).send('Variável de ambiente POWERBI_URL não configurada.')
    return
  }

  // Redireciona o usuário diretamente para o Power BI
  res.redirect(302, POWERBI_URL)
}
