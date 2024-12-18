
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(top: Pick<T, 'name' | 'color'>, bottom: Pick<U, 'position' | 'weight'>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}



const topObject = {
  name: 'Object A',
  position: 1,
  color: 'red',
  weight: 10,
};

const bottomObject = {
  name: 'Object B',
  position: 2,
  color: 'blue',
  weight: 20,
};


const result = compare(topObject, bottomObject);

console.log(result);
