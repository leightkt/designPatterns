class Observable {
  observers
  constructor() {
    this.observers = []
  }

  subscribe(subscriber) {
    this.observers.push(subscriber)
  }
  unsubscribe(subscriber) {
    this.observers.filter(obs => obs !== subscriber)
  }

  notify(data) {
    this.observers.forEach(obs => obs(data))
  }
}

const observable = new Observable()

function observer1(data) {
  console.log(`${Date.now()}, ${data}`)
}

function observer2(data) {
  console.log('Oh Hey, new data', data)
}

observable.subscribe(observer1)
observable.subscribe(observer2)

observable.notify('this is some new data')

observable.unsubscribe(observer1)

observable.notify('more new data')
