import * as Plot from "https://cdn.jsdelivr.net/npm/@observablehq/plot@0.6/+esm";

console.log("Hello World!");
console.log(Plot);

// let plot = Plot.rectY({length: 10000}, Plot.binX({y: "count"}, {x: Math.random})).plot();

let plot = null;

const div = document.querySelector("#myplot");

fetch("./xyf.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const fData = data.map((d) => {
      return {
        X: +d.X,
        Y: +d.Y,
        F: +d.F,
      };
    });

    plot = Plot.plot({
    //   projection: "equal-earth",
      color: {
        scheme: "YlOrBr",
        legend: true,
        label: "F (who knows)",
        // type: "diverging"
      },
      marks: [
        Plot.contour(fData, {
          x: "X",
          y: "Y",
          fill: "F",
          blur: 6,
          stroke: "black",
        //   clip: "sphere",
        }),
      ],
    });
    div.append(plot);
  });
