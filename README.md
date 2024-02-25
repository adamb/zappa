# Let's illustrate Zappa songs with Dalle

The idea here is to create fun pages that are based on Frank Zappa songs.

To run the code, just run

`% node generateImages.js`

It is a little fragile. If it hits the image limit it will wait for a minute.  If it hits the content
filtering, it will also wait and retry.

These retries never stop, so it might get stuck.

You can add your own lyrics by just changing the lyrics array. 

The API key is taken from your environment, so you'll have to set that.

<br>

I started with the lyrics from Stinkfoot.  This song has always elicited strong images in 
my imagination.  Here's what Dalle came up with for the first few verses.

# [Stink-Ffoot by Frank Zappa](https://open.spotify.com/track/5nV609B7jqDuKEupcerPTK) <em>Spotify</em>


<img src="./image0.png" alt="Image 0" width="200"/>
<p>In the dark, Where all the fevers grow</p>

<img src="./image1.png" alt="Image 1" width="200"/>
<p>  Under the water, Where the shark bubbles blow
</p>

<img src="./image2.png" alt="Image 2" width="200"/> 
<p>In the mornin', By your radio
</p>

<img src="./image3.png" alt="Image 3" width="200"/>
<p>Do the walls close in to suffocate ya
</p>

<img src="./image4.png" alt="Image 4" width="200"/>
<p>You ain't got no friends..., An' all the others they hate ya?
</p>

<img src="./image5.png" alt="Image 4" width="200"/>
<p>There's the life you been leadin' gotta go
</p>

<img src="./image6.png" alt="Image 4" width="200"/>
<p>Well, lemme straighten you out, About a place I know...
</p>

<img src="./image7.png" alt="Image 4" width="200"/>
<p>Get your shoes 'n socks on people because it's right aroun' the corner!
</p>

<img src="./image8.png" alt="Image 4" width="200"/>
<p> This must be the disease for you
</p>

<img src="./image9.png" alt="Image 4" width="200"/>
<p>Now scientists call this disease Bromhidrosis
</p>

<img src="./image10.png" alt="Image 4" width="200"/>
<p> But us regular folks who might wear tennis shoe
</p>

<img src="./image11.png" alt="Image 4" width="200"/>
<p> Or an occasional python boot
</p>

<img src="./image12.png" alt="Image 4" width="200"/>
<p>Know this exquisite little inconvenience by the name of stinkfoot
</p>


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

# 2024-02-25 16:32:58

Should make the image names from the lyrics...