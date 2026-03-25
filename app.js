const revenueInput = document.getElementById("revenue");
const growthInput = document.getElementById("growth");
const multipleInput = document.getElementById("multiple");
const output = document.getElementById("outputValue");

const ctx = document.getElementById("chart");

let chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [{
      label: "Revenue Growth",
      data: []
    }]
  }
});

function calculate() {
  const revenue = parseFloat(revenueInput.value);
  const growth = parseFloat(growthInput.value) / 100;
  const multiple = parseFloat(multipleInput.value);

  let values = [];
  let current = revenue;

  for (let i = 0; i < 5; i++) {
    current *= (1 + growth);
    values.push(current);
  }

  const exitValue = current * multiple;
  output.innerText = "$" + exitValue.toLocaleString();

  chart.data.labels = ["Year 1","Year 2","Year 3","Year 4","Year 5"];
  chart.data.datasets[0].data = values;
  chart.update();
}

revenueInput.addEventListener("input", calculate);
growthInput.addEventListener("input", calculate);
multipleInput.addEventListener("input", calculate);

calculate();
