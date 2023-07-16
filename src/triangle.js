//business logicn
// The following code is new.
// Don't add this to your own code. example export for triangle func
//exports.triangleModule = Triangle; 
// export function Triangle(side1, side2, side3) {
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
// // }Triangle.prototype.checkType = function() {
//   return "I can't answer that yet!";
// }
// below is wirintg default way. only usaful if one export in file but has shorter syntax
export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  return "I can't answer that yet!";
}