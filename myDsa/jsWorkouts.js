// const arr = [
//   { bus: "jnfref", hey: "wdw", err: "err" },
//   { bus: "urfnrf", hey: "wdw" },
// ];
// console.log(arr);
// const newArr = arr
//   .map((useItem) => ({
//     ...useItem,
//   }))
//   .map((i) => delete i.err);
// console.log(newArr, "riii");
const queryDataArray = [
  { hostTemplateId: 1, neDetailId: 2, oidIdx: "example" },
  { hostTemplateId: 10, neDetailId: 3, oidIdx: "example1" },
  { hostTemplateId: 15, neDetailId: 23, oidIdx: "example2" },
];
console.log(
  queryDataArray
    .map((queryData) => {
      return Object.keys(queryData)
        .map(
          (key) =>
            encodeURIComponent(key) + "=" + encodeURIComponent(queryData[key])
        )
        .join("&");
    })
    .join("&")
);
