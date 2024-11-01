import { defineConfig } from "umi";
// import defaultSettings from './defaultSettings';
import routes from "./routers";

export default defineConfig({
  npmClient: "yarn",
  routes,
});
