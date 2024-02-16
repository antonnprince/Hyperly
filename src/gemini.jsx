import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyA8FmszqsMYSR35KM9pf6j84RDMr2CrSA0');

export const linkedin = async()=>{

  try{
    const model = genAI.getGenerativeModel({model:"gemini-pro"});

  const result = await model.generateContent("What is 1+1");

  const response = await result.reponse;
  console.log(response);

  return response.text()
  
  } catch(err){
    throw err;
  }
  
  
}

