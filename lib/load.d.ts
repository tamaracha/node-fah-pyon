export type Message = { type: string; payload: any }
declare const grammar: nearley.CompiledRules
export function load(input: string): Message
export function safeLoad(input: string): Message
import * as nearley from 'nearley'
