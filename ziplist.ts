function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  const result: (string | number)[] = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));

function zipListTheFunctionalWay(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  return list1.flatMap((x: string | number, index: number): (string | number)[] => [x, list2[index]]);
}

console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c']));
