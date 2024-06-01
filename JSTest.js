// Create a variable to hold your NFTs
const NFTS=[];
// Function to mint an NFT
function mintmft(name,city,arttype,price){
     // Create an NFT object with the given metadata
    const nft={
        name:name,
        city:city,
        arttype:arttype,
        price:price
    };
    NFTS.push(nft);
}
// Function to list all NFTs
function listnft(){
    for(let i=0;i<NFTS.length;i++){
        // Print the metadata of each NFT
        console.log(NFTS[i].name);
        console.log(NFTS[i].city);
        console.log(NFTS[i].arttype);
        console.log(NFTS[i].price);
    };
}
// Function to get the total number of NFTs
function totalnft(){
    return NFTS.length;
}
// Mint an NFT by calling the mintmft function with specific values
mintmft("ashish","sonipat","natur",100);
mintmft("rahul","rohtak","road",110);
mintmft("dheeraj","karnal","car",120);
listnft();
// Get the total number of NFTs by calling the totalnft function and print it
totalnft();
    console.log("total supply:"+totalnft());
