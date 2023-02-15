columnHeader = ["id", "name", "age", "address", "timestamp", "city"];

filterInputValues = {
  id: "",
  name: "",
  age: "",
  address: "",
  timestamp: "",
  city: "",
};

tableArr = [
  {
    id: "1",
    name: "xyz",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "abc",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "disha",
    age: "30",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "sahil",
    age: "30",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "bhav",
    age: "25",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "xyz",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "xyz",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "xyz",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "xyz",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "xyz",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "xyz",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
  {
    id: "1",
    name: "mamma",
    age: "20",
    address: "agjagajgjaggfygf",
    timestamp: "sdadfafuyuwfwgsjgfj fasf",
    city: "dadgrugefcbbmnbvcjfsh",
  },
];

function populateTable(tableData, columns) {
  let filterTable = document.getElementById("filter-table");
  //   filterTable.innerHTML = "";

  // console.log(filterTable);
  let headerRow = filterTable.getElementsByTagName("tr");
  let tableBody = filterTable.getElementsByTagName("tbody");

  populateTableHeader(headerRow, columns);
  populateTableBody(tableBody, tableData, columns);
}

function populateTableHeader(rowElement, columnHeader) {
  for (let i = 0; i < columnHeader.length; i++) {
    let th = document.createElement("th");

    let span1 = document.createElement("span");
    span1.innerHTML = columnHeader[i];
    th.appendChild(span1);
    let span2 = document.createElement("span");
    let input = document.createElement("input");
    input.setAttribute("id", columnHeader[i]);
    input.addEventListener("keyup", applyfilter);
    span2.appendChild(input);
    th.appendChild(span2);
    rowElement[0].appendChild(th);
  }
}

function populateTableBody(tableBody, tableData, columns) {
  tableBody[0].innerHTML = "";

  tableData.forEach((element) => {
    let row = document.createElement("tr");
    for (let i = 0; i < columns.length; i++) {
      let td = document.createElement("td");
      let span1 = document.createElement("span");
      span1.innerHTML = element[columns[i]];
      td.appendChild(span1);
      //   let span2 = document.createElement("span");
      //   let input = document.createElement("input");
      //   span2.appendChild(input);
      //   td.appendChild(span2);
      row.appendChild(td);
    }
    // for (const [key, value] of Object.entries(element)) {
    //   //   console.log(key, value);
    //   let td = document.createElement("td");
    //   td.innerHTML = value;
    //   row.appendChild(td);
    // }
    tableBody[0].appendChild(row);
  });
}

populateTable(tableArr, columnHeader);

// console.log(filterTable);

function applyfilter(e) {
  //   console.log(e.target.value);
  let key = e.target.id;
  let filterValue = e.target.value;

  filterInputValues[key] = filterValue.trim().toLowerCase();
  console.log(filterInputValues);

  //   tableArr.forEach((data) => {
  //     for (let key in filterInputValues) {
  //     //   console.log(data[key]);

  //     }
  //   });

  const filteredTableArr = tableArr.filter((data) => {
    let success_flag = true;
    const li = [];
    for (let key in filterInputValues) {
      li.push(
        data[key]
          .toString()
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(filterInputValues[key].toLowerCase().replace(/\s/g, ""))
      );
    }
    for (let i = 0; i < li.length; i++) {
      if (li[i] === false) {
        success_flag = false;
      }
    }
    return success_flag;
  });

  console.log(filteredTableArr);
  let filterTable = document.getElementById("filter-table");
  let tableBody = filterTable.getElementsByTagName("tbody");
  populateTableBody(tableBody, filteredTableArr, columnHeader);
}
