import { test, expect } from '@playwright/experimental-ct-react';
import App from './App';

test('mouse enter', async ({ page, mount }) => {
  const component = await mount(
    <App />
  );
  await expect(component).toHaveScreenshot();
});
