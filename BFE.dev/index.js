// ** 177. Implement Object.groupBy()
const items = [
  {
    id: 1,
    kind: "a",
  },
  {
    id: 2,
    kind: "b",
  },
  {
    id: 3,
    kind: "a",
  },
  {
    id: 4,
    kind: "c",
  },
  {
    id: 5,
    kind: "c",
  },
];

function ObjectGroupBy(items, callback) {
  if (!Array.isArray(items)) {
    throw Error("error");
  }

  return items.reduce((acc, useItem) => {
    const key = callback(useItem);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(useItem);
    return acc;
  }, Object.create(null));
}
const groups = ObjectGroupBy(items, ({ kind }) => kind);
console.log(groups);
