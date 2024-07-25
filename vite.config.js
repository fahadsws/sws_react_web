// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import { config } from 'dotenv'
// import dotenv from 'dotenv';


// dotenv.config() // Load environment variables from .env file

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env': process.env
//   }
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env // Expose environment variables
  },
  build: {
    chunkSizeWarningLimit: 1000 // Set limit to 1000 kB
  }
});
