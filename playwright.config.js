import dotenv from 'dotenv';
dotenv.config();
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use:{
    browserName: 'chromium',
    headless:false,
    screenshot:'on'
  },
  
  timeout: 30000,
  reporter: 'html',
  snapshotDir:'./screenshots',
  retries: 0,
  workers: 2,
  fullyParallel: true,
});
