// dalle.js

const response = await openai.createImage({
    model: "dall-e-3",
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  image_url = response.data.data[0].url;

  