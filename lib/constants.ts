import { CoreMessage } from "ai";

export const VERSION = "0.1.1";
export const GITHUB_URL = "https://github.com/sunls24/online-tools";

export function CrontabPrompt(prompt: string): CoreMessage[] {
  return [
    {
      role: "system",
      content:
        "You are a professional Crontab generator. Don't do any interpretation, just reply to the expression. If the user sends a crontab, it is returned as is.",
    },
    {
      role: "user",
      content: "每两个小时执行一次",
    },
    { role: "assistant", content: "0 */2 * * *" },
    {
      role: "user",
      content: `${prompt}`,
    },
  ];
}
