const generator = require("creditcard-generator");
const name = require("random-name");
const country = require("random-country");
const zip = require("random-zipcode");

const genRnd = (min, max) => {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
};

const genRndCVV = () => genRnd(100, 999);

const genRndExp = () => {
  let month = genRnd(1, 13);
  if (month < 10) {
    month = `0${month}`;
  } else {
    month = `$month`;
  }

  let year = `${genRnd(23, 31)}`;

  return { month: month || "01", year: year || "23" };
};

const genRndVisaCards = (number) => {
  const cards = generator.GenCC("Visa", number).map((card) => {
    // const fname = name.first();
    // const lname = name.last();
    // const fullName = `${fname} ${lname}`;

    const p1 = card.substring(0, 4);
    const p2 = card.substring(4, 8);
    const p3 = card.substring(8, 12);
    const p4 = card.substring(12, 16);

    return {
      // brand: "Visa",
      // name: { first: fname, last: lname, full: fullName },
      // country: country({ full: true }),
      // zip: zip(),
      number: `${p1} ${p2} ${p3} ${p4}`,
      cvv: genRndCVV(),
      exp: genRndExp(),
    };
  });

  return cards;
};

module.exports.genRndCVV = genRndCVV;
module.exports.genRndExp = genRndExp;
module.exports.genRndVisaCards = genRndVisaCards;
