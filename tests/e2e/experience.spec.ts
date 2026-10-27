import { expect, test } from "@playwright/test";

test("ಎರಡು ಶೀರ್ಷಿಕೆ ಮತ್ತು ನಿರಂತರ ಪ್ರವೇಶ",async({page},testInfo)=>{
  await page.goto("/",{waitUntil:"domcontentloaded"});
  const intro=page.locator(".cinematic-intro");
  await expect(intro).toBeVisible();
  await expect(page.locator(".intro-lockup")).toContainText("ನನ್ನ ಕನ್ನಡ");
  await expect(intro).toHaveClass(/nannaKannada/,{timeout:1200});
  if(testInfo.project.name==="desktop")await page.screenshot({path:"docs/screenshots/01-intro-desktop.png"});
  await expect(page.locator(".intro-lockup")).toContainText("ನನ್ನ ಕರ್ನಾಟಕ",{timeout:5000});
  await expect(intro).toHaveClass(/zoomOut/,{timeout:5000});
  await expect(intro).toBeHidden({timeout:8000});
  await expect(page.getByRole("heading",{name:/ಇದು ನನ್ನ ನೆಲ/})).toBeVisible();
});

test("ಸ್ಕಿಪ್ ನಂತರ navigation ಮತ್ತು route ಕೆಲಸ",async({page},testInfo)=>{
  await page.goto("/",{waitUntil:"domcontentloaded"});
  await page.getByRole("button",{name:/ಮುಂದೆ ಹೋಗೋಣ/}).click({force:true});
  await expect(page.locator(".cinematic-intro")).toBeHidden();
  if(testInfo.project.name==="desktop")await page.screenshot({path:"docs/screenshots/02-home-desktop.png",fullPage:true});
  const learnLink=page.locator('.hero-actions a[href="/learn"]');
  await expect(learnLink).toHaveAttribute("href","/learn");
  await learnLink.click({force:true});
  await expect(page).toHaveURL(/\/learn$/);
  await expect(page.getByRole("heading",{name:/ಮೊದಲ ಮಾತಿನಿಂದ/})).toBeVisible();
});

test("reduced motion ತ್ವರಿತವಾಗಿ ವಿಷಯ ತೋರಿಸುತ್ತದೆ",async({browser})=>{
  const context=await browser.newContext({reducedMotion:"reduce",viewport:{width:390,height:844}});
  const page=await context.newPage();await page.goto("/");
  await expect(page.locator(".cinematic-intro")).toBeHidden({timeout:1500});
  await expect(page.getByRole("heading",{name:/ಇದು ನನ್ನ ನೆಲ/})).toBeVisible();
  await context.close();
});

test("ಪ್ರಾದೇಶಿಕ ಹುಡುಕಾಟ ಮತ್ತು ಹೋಲಿಕೆ",async({page},testInfo)=>{
  await page.goto("/dialects");
  await page.getByLabel("ಪ್ರದೇಶ ಅಥವಾ ಮಾತು ಹುಡುಕು").fill("ಧಾರವಾಡ");
  await expect(page.getByRole("button",{name:"ಉತ್ತರ"})).toBeVisible();
  await page.getByRole("button",{name:"ಉತ್ತರ"}).click();
  await expect(page.getByRole("heading",{name:"ಧಾರವಾಡ ಕನ್ನಡ"})).toBeVisible();
  if(testInfo.project.name==="mobile")await page.screenshot({path:"docs/screenshots/03-dialects-mobile.png",fullPage:true});
});

test("ಕ್ವಿಜ್ ಅಂಕ ನಿಜವಾದ ಉತ್ತರದಿಂದ ಬರುತ್ತದೆ",async({page})=>{
  await page.goto("/challenge");
  await page.getByRole("button",{name:"Thank you"}).click();await page.waitForTimeout(750);
  await page.getByRole("button",{name:"ವಿಜಯನಗರ"}).click();await page.waitForTimeout(750);
  await page.getByRole("button",{name:"ದಾರಿ ಕೇಳಲು"}).click();
  await expect(page.getByRole("heading",{name:"3 / 3"})).toBeVisible({timeout:2000});
});
