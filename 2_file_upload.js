import lighthouse from "@lighthouse-web3/sdk";

const dealParams = {
	num_copies: 2,
};

const uploadResponse = await lighthouse.upload('father.png', '92f721db.f897d995f402440d81017a6c000fedb5');
