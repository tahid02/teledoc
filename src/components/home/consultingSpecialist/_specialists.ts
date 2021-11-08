export interface ISpecialist {
  id: number;
  photoURL: string;
  name: string;
}

export const specialist = (): ISpecialist[] => {
  return [
    {
      id: 1,
      photoURL: 'medicine',
      name: 'medicine',
    },
    {
      id: 2,
      photoURL: 'heart',
      name: 'heart',
    },
    {
      id: 3,
      photoURL: 'kidney',
      name: 'kidney',
    },
    {
      id: 3,
      photoURL: 'eye',
      name: 'eye',
    },
  ];
};
