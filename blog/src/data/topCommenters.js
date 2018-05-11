let id = 0;
function createData(name) {
  id += 1;
  return { id, name };
}

const topCommenters = [
  createData("Sherry Nichols"),
  createData("Euguene Daniels"),
  createData("Jeremiah Bates"),
  createData("Alberto Hanson"),
  createData("Amanda Thomas"),
  createData("Cory Terry"),
  createData("Larry Watson"),
  createData("Roberto Matthews"),
  createData("Lauren Anderson"),
  createData("Harvey Carroll")
];

export default topCommenters;
