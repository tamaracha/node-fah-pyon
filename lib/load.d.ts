export type Message = { type: string; payload: any }
export function load(input: string): Message
export function safeLoad(input: string): Message
