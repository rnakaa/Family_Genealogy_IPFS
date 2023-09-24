// Lighthouse SDKのインポート{

const filePath = './farther.png';
const apiKey = '2f721db.f897d995f402440d81017a6c000fedb5';

// アップロード用の関数
async function uploadFile(filePath, apiKey) {

  console.log('Starting upload...');

  try {
    const uploadResponse = await lighthouse.upload(filePath, apiKey);  
    const cid = uploadResponse.cid;

    console.log('Upload success!', cid);  
    return cid;

  } catch (err) {
    console.error('Upload failed', err);
    throw err;
  }
}

// ダウンロード用の関数  
async function downloadFile(cid, filePath) {

  console.log('Starting download...');

  try {
    // ダウンロード処理

    console.log('Download success!');

  } catch (err) {
    console.error('Download failed', err);
    throw err;  
  }

}

// メイン処理
async function main() {

  // 各種パラメータ

  const lighthouse = await import('@lighthouse-web3/sdk');

  const cid = await uploadFile(filePath, apiKey); 
  await downloadFile(cid, downloadPath);

  console.log('Process completed!');

}

main();
