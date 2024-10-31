import { setConfig } from "./config";
export function HelloWorld(name: string = "World"): string {
  return `Hello, ${name}!`;
}

export default { setConfig };
