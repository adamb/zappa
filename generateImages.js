import OpenAI from "openai";
import fs from "fs-extra";

const openai = new OpenAI();

// Function to generate an image from text

async function generateImage(text, index) {
  while (true) {
    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS: " 
        + text,
        n: 1, // Number of images to generate
        size: "1024x1024", // Image size
        response_format: "b64_json",
      });

      const imageBase64 = response.data[0].b64_json; 
      fs.writeFileSync(`./image${index}.png`, imageBase64, 'base64');

      console.log(`Image${index}.png saved.`);
      return `./image${index}.png`;
    } catch (error) {
      if (error.message.includes('quota') || error.message.includes('content')) { // replace with actual error message or code
        console.error("Quota exceeded, waiting for a minute before retry...");
        await new Promise(resolve => setTimeout(resolve, 60*1000));
      } else {
        console.error("Error generating image:", error);
        throw error;
      }
    }
  }
}

// Function to create HTML content
function createHtmlContent(lyrics, imageUrls) {
  let htmlContent = `<html><body>`;
  lyrics.forEach((line, index) => {
    if (imageUrls[index]) {
      htmlContent += `<div>
                        <img src="${imageUrls[index]}" alt="Image for '${line}'" width="300" />
                        <p>${line}</p>
                      </div>`;
    }
  });
  htmlContent += `</body></html>`;
  return htmlContent;
}

// Main function to process lyrics and generate HTML
async function processLyrics(lyrics) {
  const imageUrls = []
  let counter = 0
  for (const line of lyrics) {
    const imageUrl = await generateImage(line,counter++)
    imageUrls.push(imageUrl)
  }

  const htmlContent = createHtmlContent(lyrics, imageUrls);
  await fs.writeFile("./lyricsImages.html", htmlContent);
}

// Example lyrics array (limit 5)
const lyrics = [
  // "In the dark, Where all the fevers grow",
  // "Under the water, Where the shark bubbles blow",
  // "In the mornin', By your radio",
  // "Do the walls close in to suffocate ya",
  // "You ain't got no friends..., An' all the others they hate ya?",
  // "There's the life you been leadin' gotta go",
  // "Well, lemme straighten you out, About a place I know...",
  // "Get your shoes 'n socks on people because it's right aroun' the corner!",
  //Add more lines as needed
  "This must be the disease for you",
  "Now scientists call this disease Bromhidrosis",
  "But us regular folks who might wear tennis shoe",
  "Or an occasional python boot",
  "Know this exquisite little inconvenience by the name of stinkfoot",
];

processLyrics(lyrics);