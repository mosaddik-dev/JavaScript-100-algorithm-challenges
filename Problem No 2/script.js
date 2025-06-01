/**
 *
 * @param {Number} params1
 * @param {Number} params2
 */
function sum(params1, params2) {
  return params1 + params2;
}

console.log("sum ", sum(1, 2));

/**
 *
 * @param  {...Number} params
 */

function totalSum(...params) {
  //********  method 1 (using reduce method)  ******** */

  // const result = params.reduce((cur, acc) => cur + acc);
  // console.log("result: ", result);
  // return result;

  //********  method 2 (using reduce method)  ******** */

  let total = 0;
  params.forEach((paramElement) => (total += paramElement));
  return total;
}

console.log("totalSum: ", totalSum(1, 2, 3, 4, 5, 6));
