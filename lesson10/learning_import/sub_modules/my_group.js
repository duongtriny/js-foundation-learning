const groupName = "Test With Me";
let admin = "Tho Test";

function print() {
  console.log(`Welcome to group ${groupName} - Admin ${admin}`);
}

export { groupName as myGroupName, admin as myAdmin, print as myPrint};

export default groupName;