import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyA8FmszqsMYSR35KM9pf6j84RDMr2CrSA0');

export const generatePost = async({name,product,industry})=>{

  try{
    const model = genAI.getGenerativeModel({model:"gemini-pro"});

  const result = await model.generateContent
  (``);


  const response = result.response;
  console.log(response);

  return response.text()
  
  } catch(err){
    throw err;
  }
  
  
}

