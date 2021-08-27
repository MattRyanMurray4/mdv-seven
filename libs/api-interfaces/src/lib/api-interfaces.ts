export interface Metal {
  id: string;
  name: string;
  classification: string;
  valuePerOunce: string;
  meltingPoint: number;
  preciousMetal: boolean;
}

export const emptyMetal = {
  id: '',
  name: '',
  classification: '',
  valuePerOunce: '',
  meltingPoint: 0,
  preciousMetal: false,
};
