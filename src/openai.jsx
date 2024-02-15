import { OpenAI } from "openai";

const apikey = process.env.API_KEY;
const openai = new OpenAI({ apiKey: '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',dangerouslyAllowBrowser: true  });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();

export { main };
