import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test("should display the hiring platform title", async ({ page }) => {
    await page.goto("/")

    // Check if the title is visible
    await expect(
      page.getByRole("heading", { name: /Hiring Platform/i })
    ).toBeVisible()
  })

  test("should display the counter component", async ({ page }) => {
    await page.goto("/")

    // Check if counter component is visible
    await expect(page.getByText("Zustand Counter Demo")).toBeVisible()
    await expect(page.getByText("0")).toBeVisible()
  })

  test("should increment counter when increment button is clicked", async ({
    page,
  }) => {
    await page.goto("/")

    // Find and click the increment button
    const incrementButton = page.getByRole("button", { name: "+" })
    await incrementButton.click()

    // Check if the count is now 1
    await expect(page.getByText("1")).toBeVisible()
  })

  test("should decrement counter when decrement button is clicked", async ({
    page,
  }) => {
    await page.goto("/")

    // First increment to 1
    await page.getByRole("button", { name: "+" }).click()

    // Then decrement back to 0
    const decrementButton = page.getByRole("button", { name: "-" })
    await decrementButton.click()

    // Check if the count is back to 0
    await expect(page.getByText("0")).toBeVisible()
  })

  test("should reset counter when reset button is clicked", async ({
    page,
  }) => {
    await page.goto("/")

    // Increment multiple times
    await page.getByRole("button", { name: "+" }).click()
    await page.getByRole("button", { name: "+" }).click()
    await page.getByRole("button", { name: "+" }).click()

    // Check count is 3
    await expect(page.getByText("3")).toBeVisible()

    // Click reset
    await page.getByRole("button", { name: "Reset" }).click()

    // Check count is back to 0
    await expect(page.getByText("0")).toBeVisible()
  })

  test("should display tech stack information", async ({ page }) => {
    await page.goto("/")

    // Check if tech stack section is visible
    await expect(page.getByText("Tech Stack")).toBeVisible()
    await expect(page.getByText("Next.js 16 with App Router")).toBeVisible()
  })
})
