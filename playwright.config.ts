import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir:"./tests/e2e",timeout:30_000,fullyParallel:false,workers:1,
  use:{baseURL:"http://localhost:3100",trace:"retain-on-failure",screenshot:"only-on-failure",
    launchOptions:{executablePath:"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"}},
  projects:[
    {name:"mobile",use:{viewport:{width:390,height:844}}},
    {name:"tablet",use:{viewport:{width:768,height:1024}}},
    {name:"desktop",use:{viewport:{width:1280,height:800}}},
  ],
});
