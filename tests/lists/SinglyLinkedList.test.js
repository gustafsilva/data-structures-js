/* eslint-disable max-len */
const List = require("../../lib/lists/SinglyLinkedList");

describe("Singly Linked List constructor", () => {
  test("SinglyLinkedList constructor none argument", () => {
    const lengthZero = 0,
      listNoneArgument = new List();

    expect(listNoneArgument.length).toBe(lengthZero);
  });

  test("SinglyLinkedList constructor with void list", () => {
    const lengthZero = 0,
      listNoneArgument = new List([]);

    expect(listNoneArgument.length).toBe(lengthZero);
  });

  test("SinglyLinkedList constructor with two elements (in list argument)", () => {
    const lengthValid = 2,
      listTwoElements = new List([
        "gustavo",
        "guilherme"
      ]);

    expect(listTwoElements.length).toBe(lengthValid);
  });

  test("SinglyLinkedList constructor with invalid argument (string)", () => {
    const lengthZero = 0,
      listVoid = new List("gustavo");

    expect(listVoid.length).toBe(lengthZero);
  });
});

describe("Singly Linked List add", () => {
  const listOneElement = new List(),
    listTwoElements = new List();


  test("SinglyLinkedList add one element", () => {
    const lengthOne = 1;

    listOneElement.add({"name": "gustavo"});
    expect(listOneElement.length).toBe(lengthOne);
  });

  test("SinglyLinkedList add two elements", () => {
    const lengthTwo = 2;

    listTwoElements.add({"name": "gustavo"});
    listTwoElements.add({"name": "leticia"});
    expect(listTwoElements.length).toBe(lengthTwo);
  });

});