const ages=[12,14,13,17];
const ages2=[41,42,43,40];
const ages3=[2,3,12,15];
const spreedAges=[...ages,...ages2,70,...ages3];

const allAges= ages.concat(ages2);

console.log(allAges);
console.log(spreedAges);


const business=650;
const minister=450;
const sochib=250;

const  maximum=Math.max(business,minister,sochib);
console.log(maximum)

const takaPoisa=[650,450,750,250];
const max=Math.max(...takaPoisa);
const min=Math.min(...takaPoisa);
console.log(max)
console.log(min)

//Find Maximum
