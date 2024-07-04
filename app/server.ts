"use server";
import { CronJob } from "cron";
import { createStreamableValue } from "ai/rsc";
import { CoreMessage, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";
import { CrontabPrompt } from "@/lib/constants";

export async function crontab(cron: string): Promise<any> {
  try {
    const job = new CronJob(cron, () => {});
    return job.nextDates(7).map((v) => v.toFormat("yyyy-LL-dd HH:mm:ss"));
  } catch (err: any) {
    return { error: err.message };
  }
}

const model = process.env.OPENAI_MODEL ?? "gpt-3.5-turbo";
const openai = createOpenAI({ baseURL: process.env.OPENAI_BASE_URL });

export async function crontabAI(prompt: string) {
  return await askAI(CrontabPrompt(prompt));
}

async function askAI(messages: CoreMessage[]) {
  const stream = createStreamableValue();
  try {
    const { textStream } = await streamText({
      temperature: 0.2,
      model: openai(model),
      messages,
    });

    (async () => {
      for await (const text of textStream) {
        stream.update(text);
      }
    })()
      .catch(console.log)
      .finally(stream.done);

    return { data: stream.value };
  } catch (err: any) {
    stream.done();
    return { error: err.message ?? err };
  }
}
