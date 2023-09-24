const lighthouse = require('@lighthouse-web3/sdk');

const filePath = './farther.ping';

const apikey = '92f721db.f897d995f402440d81017a6c000fedb5';

async function uploadFile(filePath, apiKey) {

  const uploadResponse = await lighthouse.upload(filePath, apiKey);

  const cid = uploadResponse.cid;

  console.log(`Uploaded file, CID: ${cid}`);

  return cid;
}
