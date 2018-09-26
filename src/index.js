

//-20 * x^2 - 108797540 * x - 130011773690520
//-3667291, -1772586
module.exports = function solveEquation(equation) {

  let equationTemp = equation.replace(/\s/g, '');
  //console.log(equationTemp);
  let ax = parseInt(equationTemp, 10);
  //console.log('ax = ', ax);
  let equationPos = equationTemp.lastIndexOf('^') + 2;
  let bx = equationTemp.substring(equationPos,equationTemp.length);
  //bx = bx.replace(/\s/g, '');
  bx = parseInt(bx, 10);
  //console.log('bx = ', bx);
  equationPos = equationTemp.lastIndexOf('x') + 1;
  
  let c = equationTemp.substring(equationPos,equationTemp.length);
  //console.log('c = ', c);
  let D = bx * bx - 4 * ax * c;
  //console.log('D = ', D);
  let x1 = Math.round((- bx + Math.sqrt(D)) / (2 * ax));
  //console.log('x1 = ', x1);
  let x2 = Math.round((- bx - Math.sqrt(D)) / (2 * ax));
  //console.log('x2 = ', x2);

  let solutions = [Math.min(x1, x2), Math.max(x1, x2)];
 return solutions;
}
