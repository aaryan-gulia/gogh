const Readable = require('stream').Readable;
const pinataSDK = require('@pinata/sdk');
const IPFS = require('ipfs');

//const pinataApiKey = process.env.PINATA_API_KEY;
//const pinataSecretApiKey = process.env.PINATA_SECRET_API_KEY;

const pinataApiKey = "057cea654a6ee5a8cc06"
const pinataSecretApiKey = "6b16e3fe51c06b689540018614c5298d0b53195c88c70dd62b291e9ca141bf7e"

console.log(pinataApiKey, pinataSecretApiKey); // Debug: Remove after checking


async function createRandomPng(){
    try {
        const { createCanvas } = await import('canvas');
        const width = 100;
        const height = 100;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Generate random black and white pixels
        for (let x = 0; x < width; x++) {
            for (let y = 0; y < height; y++) {
                const color = Math.random() > 0.5 ? '#FFFFFF' : '#000000'; // White or black
                ctx.fillStyle = color;
                ctx.fillRect(x, y, 1, 1); // Fill in one pixel at (x, y)
            }
        }

        // Convert the canvas to a PNG buffer
        return canvas.toBuffer();
    } catch (error) {
        console.error('Error generating PNG buffer:', error.message);
        throw error; // Re-throw the error to propagate it further
    }
}

async function uploadImageToPinata() {
    try {
        const pinata = new pinataSDK(pinataApiKey, pinataSecretApiKey);
        const imageBuffer = await createRandomPng();

        // Convert buffer to readable stream for Pinata
        const readableStreamForFile = new Readable();
        readableStreamForFile.push(imageBuffer);
        readableStreamForFile.push(null); // Indicates end of stream

        const result = await pinata.pinFileToIPFS(
            readableStreamForFile, {
            pinataMetadata: {
                name: 'RandomImage.png',
            },
        });
        console.log('File uploaded:', result);

    } catch (error) {
        console.error('Error uploading image:', error.message);
        throw error; // Re-throw the error to propagate it further
    }
}

async function getFileFromIPFS(cid) {
  const ipfs = await IPFS.create(); // Create an IPFS instance
  const stream = ipfs.cat(cid); // Retrieve the file stream by CID
  let data = '';

  for await (const chunk of stream) {
    // Each chunk is a Uint8Array, convert it to a string
    data += new TextDecoder().decode(chunk);
  }

  console.log(data); // Log the file content to the console
  await ipfs.stop(); // Stop the IPFS node
}

// Replace 'YOUR_CID_HERE' with the actual CID of the file you want to retrieve
getFileFromIPFS('YOUR_CID_HERE');


uploadImageToPinata();


