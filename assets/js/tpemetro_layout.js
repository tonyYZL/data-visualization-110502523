let TPEMetroGraph = document.getElementById("TPEMetroGraph");

let trace_augest_2023 = {};
trace_augest_2023.mode = "markers+lines";
trace_augest_2023.type = "scatter";
trace_augest_2023.name = "2023年8月";
trace_augest_2023.visible = true;
trace_augest_2023.x = [];
trace_augest_2023.y = [];
trace_augest_2023.text = [];
trace_augest_2023.line = {
  color: "#3679a6",
}
for (let i = 0; i < data_2023.length; i++) {
  trace_augest_2023.x[i] = i+1
  trace_augest_2023.y[i] = data_2023[i];
  trace_augest_2023.text[i] = `8月${i+1}日`;
}

let trace_augest_2021 = {};
trace_augest_2021.mode = "markers+lines";
trace_augest_2021.type = "scatter";
trace_augest_2021.name = "2021年8月";
trace_augest_2021.visible = true;
trace_augest_2021.x = [];
trace_augest_2021.y = [];
trace_augest_2021.text = [];
trace_augest_2021.line = {
  color: "#6db65a"
}
for (let i = 0; i < data_2021.length; i++) {
  trace_augest_2021.x[i] = i+1
  trace_augest_2021.y[i] = data_2021[i];
  trace_augest_2021.text[i] = `8月${i+1}日`;
}

let TPEMetroData = [];
TPEMetroData.push(trace_augest_2023)
TPEMetroData.push(trace_augest_2021)

let TPEMetroLayout = {
  margin: {
    t: 50,
  },
  xaxis: {
    title: "日期",
  },
  yaxis: {
    title: "人次",
    range: [10000, 2300000]
  },
  annotations: [
    {
      x: 3,
      y: 506181,
      xref: 'x',
      yref: 'y',
      text: '卡努颱風停班停課',
      showarrow: true,
      arrowhead: 7,
      arrowcolor: '#636363',
      ax: 25,
      ay: 40,
      font: {
        family: 'Courier New, monospace',
        size: 14,
        color: '#ffffff'
      },
      align: 'center',
      borderpad: 4,
      bgcolor: '#636363',
    }
  ],
  updatemenus: [
    {
        y: 1.2,
        x: 0.1,
        yanchor: "top",
        buttons: [
            {
                method: "restyle",
                args: ['visible', [true, true]],
                label: "顯示全部"
            },
            {
                method: "restyle",
                args: ['visible', [true, false]],
                label: "2023年8月"
            },
            {
                method: "restyle",
                args: ['visible', [false, true]],
                label: "2021年8月"
            },
            
        ]
    }
  ]
};

window.addEventListener('resize', () => {
  Plotly.newPlot(TPEMetroGraph, TPEMetroData, TPEMetroLayout);
})
Plotly.newPlot(TPEMetroGraph, TPEMetroData, TPEMetroLayout);

