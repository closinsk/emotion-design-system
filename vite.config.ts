import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Compute a sensible base for GitHub Pages deployments.
// When building for production, Vite needs the repository path
// (e.g. '/repo-name/') so assets are referenced correctly.
const repoName = process.env.GITHUB_REPOSITORY?.split('/')?.[1] ?? 'emotion-design-system'
const isProd = process.env.NODE_ENV === 'production'
const base = isProd ? `/${repoName}/` : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
