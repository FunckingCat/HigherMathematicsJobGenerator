export interface IProfessorState {
  section: string | null
  values: number[] | null
}

export type IProfessorSection = Pick<IProfessorState, 'section'>;
export type IProfessorValues = Pick<IProfessorState, 'values'>;
