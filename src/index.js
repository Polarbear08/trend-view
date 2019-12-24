const tabledata = [
    { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
    { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
    { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
    { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
    { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
];

const table = new Tabulator("#ex-table", {
    height: 205,
    data: tabledata,
    layout: "fitColumns",
    columns: [
        { title: "Name", field: "name", width: 150 },
        { title: "Age", field: "age", align: "left", formatter: "progress" },
        { title: "Favourite Color", field: "col" },
        { title: "Date Of Birth", field: "dob", sorter: "date", align: "center" },
    ],
    rowClick: function (e, row) {
        alert("Row" + row.getData().id + "Clicked!")
    }
})