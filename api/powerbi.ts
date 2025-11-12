<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
// api/powerbi.ts
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const POWERBI_URL = process.env.POWERBI_URL // variável configurada na Vercel

  if (!POWERBI_URL) {
    return res.status(500).send('Variável POWERBI_URL não configurada.')
  }

  try {
    const response = await fetch(POWERBI_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ProxyServer)',
      },
    })

    res.status(response.status)

    response.headers.forEach((value, key) => {
      const blocked = [
        'content-security-policy',
        'x-frame-options',
        'x-xss-protection',
        'set-cookie',
        'set-cookie2',
      ]
      if (!blocked.includes(key.toLowerCase())) {
        res.setHeader(key, value)
      }
    })

    const arrayBuffer = await response.arrayBuffer()
    res.send(Buffer.from(arrayBuffer))
  } catch (err) {
    console.error('Erro ao buscar Power BI:', err)
    res.status(500).send('Erro interno no proxy Power BI.')
  }
}


=======
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
>>>>>>> ac87b34 (configura variável de ambiente POWERBI_URL)
=======
>>>>>>> b594114 (add função serverless Power BI proxy)
>>>>>>> 504f286 (teste leitura variável POWERBI_URL)
