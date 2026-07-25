import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Chỉ định thư mục chứa các bài test
  testDir: './tests',

  /* Chạy test song song */
  fullyParallel: true,

  /* Báo cáo dạng HTML */
  reporter: 'html',

  /* Cấu hình chung cho tất cả test */
  use: {
    trace: 'on-first-retry',
  },

  /* Cấu hình các Projects */
  projects: [
    // 1. Project Setup: Chạy file auth.setup.ts trước để lưu Session
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    // 2. Project Chromium: Chạy các bài test chính dùng Session đã lưu
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // storageState nằm TRONG object use
        storageState: 'playwright/.auth/user.json', 
      },
      // dependencies nằm TRONG object project này
      dependencies: ['setup'], 
    },
  ],
});