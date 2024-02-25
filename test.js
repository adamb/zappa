import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {

  const image = await openai.images.generate({ 
    model: "dall-e-3", 
    prompt: "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:" + 
    "In the dark, Where all the fevers grow" });

  console.log(image.data[0].url)
  //console.log(image)

  // console.log(image.data);
  // const response = await openai.createImage({
  //   model: "dall-e-3",
  //   prompt: "a white siamese cat",
  //   n: 1,
  //   size: "1024x1024",
  // });

  // image_url = response.data.data[0].url;
  // console.log(image_url);


}

main();

