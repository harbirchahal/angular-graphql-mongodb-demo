export type Person = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  isActive: boolean;
}

export type Query = {
  persons: Person[];
  person(id: number): Person;
}

export type Mutation = {
  update(p: Person): Person
}
