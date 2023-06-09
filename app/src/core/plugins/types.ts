import { type templateConfig } from 'config/templatesConfig';

export interface Token {
  original: string
  value: string | number | null
  index: number
}

export type ChangedTemplate = string | Token;

export interface Plugin {
  init: () => ChangedTemplate[]
}

export type Filter = keyof typeof templateConfig.filters;

export type Alias = keyof typeof templateConfig.aliases;

export type FunctionName = keyof typeof templateConfig.functions;

export interface Range {
  min: number
  max: number
  filterName?: Filter
}

export interface Enumeration {
  arr: string[]
  filterName?: Filter
}

export interface MathFunction {
  functionName: FunctionName
  arg: number
}
