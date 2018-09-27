const formatString = (data, key = null) => {
  let formatedString = "";

  if (key === null) {
    formatedString = ` ${data} `;
  } else {
    formatedString = ` ${data[key]} `;
  }

  return formatedString;
};

class Node {
  constructor(data = {}, next = null) {
    this.data = data;
    this.next = next;
  }
}


class SinglyLinkedList {
  constructor(datas = []) {
    const minLengthInitialData = 1;

    this.length = 0;
    this.head = null;

    if (Array.isArray(datas) && datas.length >= minLengthInitialData) {
      datas.forEach((element) => {
        this.add(element);
      });
    }
  }

  add(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let cursor = this.head;

      while (cursor.next !== null) {
        cursor = cursor.next;
      }
      cursor.next = newNode;
    }
    this.length += 1;
  }

  getElement(index) {
    const minIndex = 0;
    let element = null;

    if (index >= minIndex) {
      const increment = 1;
      let count = 0,
        cursor = this.head;

      while (count < index) {
        cursor = cursor.next;
        count += increment;
      }
      element = cursor;
    }

    return element;
  }

  get(index) {
    let element = this.getElement(index);

    if (element !== null) {
      element = element.data;
    }

    return element;
  }

  toString(key = null) {
    let str = "[";
    const minLength = 0;

    if (this.length > minLength) {
      let cursor = this.head;

      while (cursor !== null) {
        str += formatString(cursor.data, key);
        cursor = cursor.next;
      }
    }
    str += "]";

    return str;
  }
}

module.exports = SinglyLinkedList;