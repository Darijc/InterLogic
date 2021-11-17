function startchart() {
    $(".chart-container").insertFusionCharts({

        type: "mscombi2d",
        width: "100%",
        //  height: "300",
        dataFormat: "json",
        dataSource: {
            chart: {
                // caption: "Expense Analysis",
                // subcaption: "ACME Inc.",
                // xaxisname: "Region",
                // yaxisname: "Amount (In USD)",
                // numberprefix: "$",
                // exportenabled: "1",
                // plottooltext: ' ',
                theme: "fusion",
                // bgColor: 'transparent',
                // bgAlpha: '100'
                plotFillRatio: 100,
                plotFillColor: '#00ffcc',
                plotGradientColor: '#000',
                plotFillAngle: 90,
                plotFillAlpha: 60,
                usePlotGradientColor: 1,
                drawAnchors: 1,
                anchorBorderColor: '#00ff99',
                anchorBorderThickness: 2,
                anchorRadius: 5,
                divLineThickness: 3,
                lineThickness: 2,
                lineColor: '#00ff99',
                drawCrossLine: 0,
                labelFont: "Furore",
                labelFontColor: '#00ff99',
                labelFontSize: 14,
                labelFontBold: 0,

            },
            categories: [
                {
                    category: [

                        {
                            label: "1961"
          },
                        {
                            label: "1966"
          },
                        {
                            label: "1968"
          },
                        {
                            label: "1976"
          },

        ]
      }
    ],
            dataset: [
                {
                    renderAs: "spline",
                    lineThickness: "2",
                    plotToolText: "",

                    data: [

                        {
                            value: "1.7"
          },
                        {
                            value: "2.4"
          },
                        {
                            value: "3.4"
          },
                        {
                            value: "12.8"
          },

        ]
      },
                {
                    renderAs: "splinearea",
                    showPlotBorder: "0",
                    plotToolText: "$dataValue",

                    data: [

                        {
                            value: "1.7"
          },
                        {
                            value: "2.4"
          },
                        {
                            value: "3.4"
          },
                        {
                            value: "12.8"
          },

        ]
      }
    ],
        }
    });
}
