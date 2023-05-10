import { getUserInput } from "../src/addToLibrary.js";

describe("getUserInput function", () => {
  test("returns an object with user input values", () => {
    document.body.innerHTML = `
          <form>
           <input type="text" id="title" value="Wood">
           <input type="text" id="author" value="Darija">
           <input type="number" id="pages" value="235">
           <input type="checkbox" id="myCheck" checked>
          </form>
        `;

    const expectedOutput = {
      title: "Wood",
      author: "Darija",
      pages: "235",
      read: true
    };

    expect(getUserInput()).toEqual(expectedOutput);
  });


})
