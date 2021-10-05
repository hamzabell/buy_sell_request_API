const xlsxFile = require("read-excel-file/node");


const schema = {
    'Segment': {
        prop: 'Segment',
        type: String
    },
    'Country': {
        prop: 'Country',
        type: String
    },
    'Product': {
        prop: 'Product',
        type: String
    }
}


xlsxFile("./codeChallenge.xlsx").then((rows) => {
  console.log(rows);
});
