import { createSSRApp } from "vue";
import App from "./App.vue";
import {interceptor} from '@/utils/request'

interceptor()
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
