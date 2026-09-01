import { test as base, Page } from "@playwright/test";
import { UserProfile, StoredAuthData } from "../../src/lib/auth-state";

export const TEST_AUTHENTICATED_USER: UserProfile = {
  id: "test-user-fixture",
  name: "Coach Montanha Test",
  email: "coach.test@montanha.com",
  isPro: false,
  createdAt: new Date().toISOString(),
};

export const TEST_PRO_USER: UserProfile = {
  id: "test-pro-fixture",
  name: "Coach Montanha PRO",
  email: "pro.test@montanha.com",
  isPro: true,
  proSince: new Date().toISOString(),
  createdAt: new Date().toISOString(),
};

const AUTH_STORAGE_KEY = "montanha_magazine_auth_state";

/**
 * Seeds a specific user into localStorage before page load
 */
export async function seedSession(page: Page, user: UserProfile | null) {
  await page.addInitScript(
    ({ storageKey, sessionUser }) => {
      const authData: StoredAuthData = {
        currentUser: sessionUser,
        users: sessionUser
          ? [
              {
                ...sessionUser,
                passwordHash: "senha123",
              },
            ]
          : [],
      };
      window.localStorage.setItem(storageKey, JSON.stringify(authData));
    },
    { storageKey: AUTH_STORAGE_KEY, sessionUser: user }
  );
}

type AuthFixtures = {
  authenticatedPage: Page;
  proPage: Page;
};

/**
 * Custom Playwright test fixture with pre-authenticated sessions
 */
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    await seedSession(page, TEST_AUTHENTICATED_USER);
    await page.goto("/");
    await use(page);
  },

  proPage: async ({ page }, use) => {
    await seedSession(page, TEST_PRO_USER);
    await page.goto("/");
    await use(page);
  },
});

export { expect } from "@playwright/test";
