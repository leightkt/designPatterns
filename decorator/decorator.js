class Beverage {
  description
  price

  getDescription() {
    console.log(this.description)
  }

  cost() {
    return this.price
  }
}

class Espresso extends Beverage {
  description = 'Espresso'
  price = 1.99
}

class HouseBlend extends Beverage {
  description = 'House Blend'
  price = 2.99
}

class CondimentDecorator {
  beverage
  constructor(beverage) {
    this.beverage = beverage
  }

  cost() {
    return this.beverage.cost()
  }
}

class Milk extends CondimentDecorator {
  constructor(beverage) {
    super(beverage)
  }

  cost() {
    return this.beverage.cost() + 1
  }
}

class Whip extends CondimentDecorator {
  constructor(beverage) {
    super(beverage)
  }

  cost() {
    return this.beverage.cost() + 1.5
  }
}

const houseBlend = new HouseBlend()
const espresso = new Espresso()

console.log('plain house blend', houseBlend.cost())
console.log('plain expresso', espresso.cost())

const bevie1 = new Milk(houseBlend)
const bevie2 = new Whip(espresso)

console.log('house blend with milk', bevie1.cost())
console.log('espresso with whip', bevie2.cost())
