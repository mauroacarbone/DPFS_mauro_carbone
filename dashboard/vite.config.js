import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const apiTarget = env.API_PROXY_TARGET || 'http://localhost:3000';

  return {
    plugins: [react()],
    base: '/central/',
    server: {
      port: Number(env.DASHBOARD_PORT) || 5173,
      proxy: {
        '/api': apiTarget,
        '/images': apiTarget
      }
    }
  };
});
