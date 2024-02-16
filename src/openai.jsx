import OpenAI from "openai";

const openai = new OpenAI({apiKey: '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',dangerouslyAllowBrowser:true});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "What is 1+1" }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

export {main}