let eCarGraph = document.getElementById("eCarGraph");

let trace_tesla = {};
trace_tesla.type = "bar";
trace_tesla.name = "Tesla";
trace_tesla.x = [];
trace_tesla.y = [];

for (let i = 0; i < Tesla.length; i++) {
  trace_tesla.x[i] = Tesla[i]["month"];
  trace_tesla.y[i] = Tesla[i]["count"];
}

let trace_bmw = {};
trace_bmw.type = "bar";
trace_bmw.name = "BMW";
trace_bmw.x = [];
trace_bmw.y = [];

for (let i = 0; i < BMW.length; i++) {
  trace_bmw.x[i] = BMW[i]["month"];
  trace_bmw.y[i] = BMW[i]["count"];
}

let trace_mercedes = {};
trace_mercedes.type = "bar";
trace_mercedes.name = "Mercedes";
trace_mercedes.x = [];
trace_mercedes.y = [];

for (let i = 0; i < Mercedes.length; i++) {
  trace_mercedes.x[i] = Mercedes[i]["month"];
  trace_mercedes.y[i] = Mercedes[i]["count"];
}

let trace_volvo = {};
trace_volvo.type = "bar";
trace_volvo.name = "Volvo";
trace_volvo.x = [];
trace_volvo.y = [];

for (let i = 0; i < Volvo.length; i++) {
  trace_volvo.x[i] = Volvo[i]["month"];
  trace_volvo.y[i] = Volvo[i]["count"];
}

let eCarData = [];
eCarData.push(trace_mercedes);
eCarData.push(trace_bmw);
eCarData.push(trace_volvo);
eCarData.push(trace_tesla);

let eCarLayout = {
  xaxis: {
    title: "月份",
  },
  yaxis: {
    title: "數量",
  },
};

window.addEventListener("resize", () => {
  Plotly.newPlot(eCarGraph, eCarData, eCarLayout);
});
Plotly.newPlot(eCarGraph, eCarData, eCarLayout);
