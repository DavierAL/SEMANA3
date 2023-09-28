declare module 'ui-console' {
  export class UI {
    constructor(width: number, height: number)

    printCharacter(x: number, y: number, character: string): void
    printUnspacedCharacter(x: number, y: number, character: string): void
    printTopMessage(message: string): void
    printBottomMessage(message: string): void
  }
}
