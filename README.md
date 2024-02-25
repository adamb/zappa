# Let's illustrate Zappa songs with Dalle

The idea here is to create fun pages that are based on Frank Zappa songs.

![Image 0](./image0.png)
![Image 1](./image1.png)
![Image 2](./image2.png)
![Image 3](./image3.png)
![Image 4](./image4.png)

# Logs...

# getting setup

npm install openai axios fs-extra

# this is the correct api 

https://platform.openai.com/docs/api-reference/images/create?lang=node.js

Hit the rate limit.  It's 5 per minute...

# 2024-02-25 15:32:17

  "Do the walls close in to suffocate ya",
This triggered a "content violation".

How do we get around this?

Just add some retry code.