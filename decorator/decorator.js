class Beverage {
  description
  price

  getDescription() {
    return this.description
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

  getDescription() {
    return this.beverage.getDescription()
  }
}

class Milk extends CondimentDecorator {
  constructor(beverage) {
    super(beverage)
  }

  cost() {
    return this.beverage.cost() + 1
  }

  getDescription() {
    return this.beverage.getDescription() + ' with Milk'
  }
}

class Whip extends CondimentDecorator {
  constructor(beverage) {
    super(beverage)
  }

  cost() {
    return this.beverage.cost() + 1.5
  }

  getDescription() {
    return this.beverage.getDescription() + ' with Whip'
  }
}

class CaramelDrizzle extends CondimentDecorator {
  constructor(beverage) {
    super(beverage)
  }

  cost() {
    return this.beverage.cost() + 2
  }

  getDescription() {
    return this.beverage.getDescription() + ' with caramel drizzle'
  }
}

const houseBlend = new HouseBlend()
const espresso = new Espresso()

console.log(`${houseBlend.getDescription()} ${houseBlend.cost()}`)
console.log(`${espresso.getDescription()} ${espresso.cost()}`)

const bevie1 = new Milk(houseBlend)
const bevie2 = new Whip(espresso)

console.log(`${bevie1.getDescription()} ${bevie1.cost()}`)
console.log(`${bevie2.getDescription()} ${bevie2.cost()}`)

const bevie3 = new Whip(new CaramelDrizzle(espresso))

console.log(`${bevie3.getDescription()} ${bevie3.cost()}`)
