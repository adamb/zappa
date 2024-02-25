import OpenAI from "openai";
import fs from "fs-extra";

const openai = new OpenAI();

// Function to generate an image from text
async function generateImage(text) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: "I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:" 
      + text,
      n: 1, // Number of images to generate
      size: "1024x1024", // Image size
      response_format: "b64_json",
    });
    console.log(response.data[0].url)
    return response.data[0].url; // Adjust this based on the actual response structure
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
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
  const imageUrls = [];
  for (const line of lyrics) {
    const imageUrl = await generateImage(line);
    imageUrls.push(imageUrl);
  }

  const htmlContent = createHtmlContent(lyrics, imageUrls);
  await fs.writeFile("./lyricsImages.html", htmlContent);
  console.log("HTML file generated successfully.");
}

// Example lyrics array (limit 5)
const lyrics = [
  "In the dark, Where all the fevers grow",
  "Under the water, Where the shark bubbles blow",
  "In the mornin', By your radio",
  "Do the walls close in to suffocate ya",
  "You ain't got no friends..., An' all the others they hate ya?",
  "There's the life you been leadin' gotta go",
  // "Well, lemme straighten you out, About a place I know...",
  // "Get your shoes 'n socks on people because it's right aroun' the corner!"
  // Add more lines as needed
];

processLyrics(lyrics);