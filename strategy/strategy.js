class Character {
  name
  level
  _fightingStyle

  constructor(name, fightingStyle) {
    this.name = name
    this.level = 1
    this._fightingStyle = fightingStyle
  }

  setFightingStyle(fightingStyle) {
    this._fightingStyle = fightingStyle
  }

  fight() {
    this._fightingStyle.fight()
  }
}

class FightingStyle {
  constructor(name, handler) {
    this._name = name
    this._handler = handler
  }

  fight() {
    this._handler()
  }
}

class SwordFight {
  name = 'sword'
  useWeapon() {
    console.log('swing sword')
  }
}

class KnifeFight {
  name = 'knife'
  useWeapon() {
    console.log('stabby stab')
  }
}

class AxeFight {
  name = 'axe'
  useWeapon() {
    console.log('swing axe')
  }
}

const swordPower = new SwordFight()
const knifePower = new KnifeFight()
const axePower = new AxeFight()

const king = new Character('king', new FightingStyle(swordPower.name, swordPower.useWeapon))
const queen = new Character('queen', new FightingStyle(knifePower.name, knifePower.useWeapon))
const troll = new Character('troll', new FightingStyle(axePower.name, axePower.useWeapon))

king.fight()
queen.fight()
troll.fight()

queen.setFightingStyle(new FightingStyle(swordPower.name, swordPower.useWeapon))

console.log('new queen action')
queen.fight()
