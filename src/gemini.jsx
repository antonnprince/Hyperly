import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyA8FmszqsMYSR35KM9pf6j84RDMr2CrSA0');

export const generatePost = async({name,product,industry})=>{

  try{
    const model = genAI.getGenerativeModel({model:"gemini-pro"});

  const result = await model.generateContent
  (`
  Generate impactful Linkedin posts tailored to "${product}" which is the product I aim to sell,
  which mainly focuses on ${industry} as the main industry(s).The name of the product is "${name}.
   Make the content  buyer-specific. Generate the content for post as bullet points,
  with each point starting by a star emoji. Also generate the content without special headings like headline, also dont generate target audience.
    Also generate hashtags which can improve SEO and generate each point line by line for improved readability.

  `);


  const response = result.response;
  console.log(response);

  return response.text()
  
  } catch(err){
    throw err;
  }
  
  
}

