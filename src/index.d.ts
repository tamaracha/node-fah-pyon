declare module 'fah-pyon' {
  export type Message = { name: string; body: any }
  export function load(input: string): Message
  export function safeLoad(input: any): Message
}
