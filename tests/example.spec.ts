import { test, expect } from '@playwright/test';


// パラメータ化（Parameterized）を使えば、このコードはさらに短く書くことができますが、
// 並列化に焦点を当て、シンプルに説明するため、あえて繰り返し記述しています。

test.describe("20 example tests", () => {
  test('Test - 1', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 2', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 3', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 4', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 5', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 6', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 7', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 8', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 9', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 10', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 11', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 12', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 13', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 14', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 15', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 16', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 17', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 18', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 19', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });

  test('Test - 20', async ({ page }) => {
    await new Promise(resolve => setTimeout(resolve, 30000));
  });
});