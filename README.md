# Chatbot IA avec Groq (déploiement Vercel)

## ✅ Ce projet contient :

- `api/chat.ts` : votre fonction API qui interroge Groq
- `vercel.json` : configuration pour Vercel

## 🚀 Pour déployer :

1. Crée un nouveau dépôt GitHub (ex. chatbot-vercel-fix)
2. Uploade tous les fichiers du ZIP dedans
3. Va sur [https://vercel.com](https://vercel.com)
4. Clique sur "Add Project" et sélectionne ton dépôt
5. Ajoute ta variable GROQ_API_KEY dans les "Environment Variables"
6. Clique sur "Deploy"

## 🧪 Pour tester

Utilise un terminal ou Postman :

```bash
curl -X POST https://<ton-url-vercel>.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"user_input": "Donne-moi une recette de mousse au chocolat"}'
```