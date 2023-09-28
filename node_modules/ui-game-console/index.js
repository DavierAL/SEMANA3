import reblessed from 'reblessed'

class UI {
  constructor(width, height) {
    this.width = width
    this.height = height

    this.screen = reblessed.screen({
      smartCSR: true,
      forceUnicode: true,
    })

    this.screen.key('escape', () => {
      this.screen.destroy()
      process.stdout.write('\x1B[?25h')
      return process.exit(0)
    })

    this.container = reblessed.box({
      width: 2 * width,
      height: height,
    })

    this.box = reblessed.box({
      top: 1,
      left: 0,
      width: 2 * width,
      height: height,
    })

    this.box.setContent(Array.from({ length: height }, () => ' '.repeat(2 * width)).join('\n'))

    this.topHud = reblessed.text({
      width: 2 * width,
      top: 0,
    })

    this.bottomHud = reblessed.text({
      width: 2 * width,
      top: height + 1,
    })

    this.container.append(this.box)
    this.container.append(this.topHud)
    this.container.append(this.bottomHud)

    process.stdout.write('\x1B[?25h')
    this.screen.append(this.container)
    this.screen.render()
  }

  printCharacter(x, y, character) {
    if (x >= this.width) throw new Error('x out of bounds')
    if (y >= this.height) throw new Error('y out of bounds')

    const line = this.box.getLines()[y]
    const characters = line.split('')
    characters[2 * x] = character
    const newLine = characters.join('')
    this.box.setLine(y, newLine)
    this.screen.render()
  }

  printUnspacedCharacter(x, y, character) {
    if (x >= 2 * this.width) throw new Error('x out of bounds')
    if (y >= this.height) throw new Error('y out of bounds')

    const line = this.box.getLines()[y]
    const characters = line.split('')
    characters[x] = character
    const newLine = characters.join('')
    this.box.setLine(y, newLine)
    this.screen.render()
  }

  printTopMessage(message) {
    this.topHud.setContent(message)
    this.screen.render()
  }

  printBottomMessage(message) {
    this.bottomHud.setContent(message)
    this.screen.render()
  }
}

// const ui = new UI(5, 5)

// ui.printCharacter(0, 0, 'X')
// ui.printCharacter(2, 2, 'X')
// ui.printTopMessage('Hello')
// ui.printBottomMessage('Bye')

export { UI }
