const wannabuy = [
    { name:"webcam" , price: 1280},
    { name:"tablet" , price: 12280},
    { name:"whiteboard" , price: 780},
    { name:"office chair" , price: 5080}
];

function filterbyprice(eachproduct){
    let threshold = 2000;
    return threshold <= eachproduct.price;
}

//same can be done by simple function
console.log("things i can't buy")
const willbuysomeday = wannabuy.filter(filterbyprice)
const willbuysomedaynames = willbuysomeday.map(product => product.name)
console.log(willbuysomedaynames);

//output false and true only if passing parameters directly only 


//arrow function is used taaki simple and shorter lge
const result = wannabuy.filter(eachproduct => eachproduct.price <= 2000);
console.log("things i can buy now")
console.log(result)