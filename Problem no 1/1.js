//For inputArray = [1,2,1], elementToReplace = 1,substrationElem = 3
//the output should be arrayReplace (inputArray, elementToReplace, substrationElem) = [3,2,3]

/**
 *
 * @param {Array} inputArray
 * @param {Number} elementToReplace
 * @param {Number} substrationElem
 */

function arrayReplace(inputArray, elementToReplace, substrationElem) {
  //********  method 1 (using for loop)  ******** */
  //   for (let i = 0; i < inputArray.length; i++) {
  //     if (elementToReplace === inputArray[i]) {
  //       inputArray[i] = substrationElem;
  //     }
  //   }

  //********  method 2 ( using map() )  ******** */

  //   inputArray.map((item, index) => {
  //     if (inputArray[index] === elementToReplace) {
  //       inputArray[index] = substrationElem;
  //     }
  //   });

  //********  method 3.0 ( using forEach() )  ******** */

  //   inputArray.forEach((item, index) => {
  //     if (inputArray[index] === elementToReplace) {
  //       inputArray[index] = substrationElem;
  //     }
  //   });

  //********  method 3.1 ( using forEach() )  ******** */

  inputArray.forEach((item, index) => {
    if (item === elementToReplace) {
      inputArray[index] = substrationElem;
    }
  });

  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);
