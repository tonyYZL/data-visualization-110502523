let electricityGraph = document.getElementById('electricityGraph');

let e2019 = {};
e2019.type = "pie";
e2019.name = "2019"
e2019.title = "2019 年"
e2019.labels = [];
e2019.values = [];
e2019.hole = 0.5
e2019.domain = {
    row: 0,
    column: 0
}

for (let x = 0; x < electricity_2019.length; x++) {
    e2019.labels[x] = electricity_2019[x]['name'];
    e2019.values[x] = electricity_2019[x]['count'];
}

let e2020 = {};
e2020.type = "pie";
e2020.name = "2020"
e2020.title = "2020 年"
e2020.labels = [];
e2020.values = [];
e2020.hole = 0.5
e2020.domain = {
    row: 0,
    column: 1
}

for (let x = 0; x < electricity_2020.length; x++) {
    e2020.labels[x] = electricity_2020[x]['name'];
    e2020.values[x] = electricity_2020[x]['count'];
}

let e2021 = {};
e2021.type = "pie";
e2021.name = "2021"
e2021.title = "2021 年"
e2021.labels = [];
e2021.values = [];
e2021.hole = 0.5
e2021.domain = {
    row: 1,
    column: 0
}

for (let x = 0; x < electricity_2021.length; x++) {
    e2021.labels[x] = electricity_2021[x]['name'];
    e2021.values[x] = electricity_2021[x]['count'];
}

let e2022 = {};
e2022.type = "pie";
e2022.name = "2022"
e2022.title = "2022 年"
e2022.labels = [];
e2022.values = [];
e2022.hole = 0.5
e2022.domain = {
    row: 1,
    column: 1
}

for (let x = 0; x < electricity_2022.length; x++) {
    e2022.labels[x] = electricity_2022[x]['name'];
    e2022.values[x] = electricity_2022[x]['count'];
}

let electricityData = [];
electricityData.push(e2019);
electricityData.push(e2020);
electricityData.push(e2021);
electricityData.push(e2022);

let electricityLayout = {
    margin: {
        t: 20,
    },
    grid: {
        rows: 2,
        columns: 2
    }
}

Plotly.newPlot(electricityGraph, electricityData, electricityLayout);


window.addEventListener('resize', () => {
    Plotly.newPlot(electricityGraph, electricityData, electricityLayout);
})
Plotly.newPlot(electricityGraph, electricityData, electricityLayout);
  
  