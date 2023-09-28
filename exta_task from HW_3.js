"use strict";

//  Вам доп. задание, переписать метод getTotalPrice с использованием .reduce метода массива.

// ---Задание 2: "Управление списком заказов"---

// Реализуйте класс Product (товар), который имеет следующие свойства и методы:
// Свойство name - название товара.
// Свойство price - цена товара.
// Свойство quantity - количество товара.

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство id (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект класса Product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования:
// const order = new Order(12345);

// const product1 = new Product("Phone", 500, 2);
// order.addProduct(product1);

// const product2 = new Product("Headphones", 100, 1);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 1100

class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

class Order {
  constructor(id) {
    this.id = id;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  getTotalPrice() {
    let sum = this.products.reduce(
      (acc, el) => acc + el.price * el.quantity,
      0
    );
    // let sum = 0;
    // for (let i = 0; i < this.products.length; i++) {
    //   sum += this.products[i].price * this.products[i].quantity;
    // }
    return sum;
  }
}
const order = new Order(12345);
const product1 = new Product("Phone", 500, 2);
order.addProduct(product1);
const product2 = new Product("Headphones", 100, 1);
order.addProduct(product2);
console.log(order.getTotalPrice());
