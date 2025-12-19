// --- Original Data Source ---
const years = [
  1981, 1982, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
];
const allData = [
  17.69, 17.96, 17.42, 15.38, 15.32, 15.14, 15.51, 15.41, 15.39, 16.31, 17.69,
  18.4, 18.27, 17.76, 17.15, 16.45, 16.72, 16.67, 16.29, 15.86, 15.22, 14.58,
  13.8, 12.97, 12.43, 12.24, 12.26, 11.65, 11.23, 11.09, 10.99, 10.45, 10.03,
  9.46, 9.17, 9.03, 8.72, 8.64,
];
const maleData = [
  28.96, 29.47, 28.39, 24.47, 24.47, 24.14, 25.13, 25.05, 25.23, 26.95, 29.64,
  31.25, 30.91, 30.18, 29.12, 28.0, 28.41, 28.49, 27.98, 27.04, 26.06, 24.85,
  23.46, 21.98, 20.95, 20.56, 20.71, 19.64, 18.87, 18.57, 18.4, 17.43, 16.6,
  15.72, 15.21, 14.96, 14.5, 14.34,
];
const femaleData = [
  8.18, 8.22, 8.08, 7.71, 7.62, 7.53, 7.3, 7.13, 6.88, 7.01, 7.18, 7.06, 7.03,
  6.71, 6.54, 6.19, 6.3, 6.12, 5.82, 5.85, 5.59, 5.43, 5.18, 4.91, 4.79, 4.79,
  4.63, 4.44, 4.33, 4.31, 4.3, 4.15, 4.1, 3.8, 3.71, 3.69, 3.52, 3.51,
];

let trendChart; // Global variable for the chart

// 1. Initialize Dropdowns
const startSelect = document.getElementById("startYearSelect");
const endSelect = document.getElementById("endYearSelect");

years.forEach((year, index) => {
  startSelect.options[startSelect.options.length] = new Option(year, year);
  endSelect.options[endSelect.options.length] = new Option(year, year);
});
endSelect.value = 2020; // Set default end year

// 2. Initial Chart Setup
const ctxTrend = document.getElementById("trendChart").getContext("2d");
trendChart = new Chart(ctxTrend, {
  type: "line",
  data: {
    labels: years,
    datasets: [
      {
        label: "Male",
        data: maleData,
        borderColor: "#e74c3c",
        tension: 0.3,
      },
      {
        label: "All Persons",
        data: allData,
        borderColor: "#2c3e50",
        fill: true,
        tension: 0.3,
      },
      {
        label: "Female",
        data: femaleData,
        borderColor: "#3498db",
        tension: 0.3,
      },
    ],
  },
  options: { responsive: true, maintainAspectRatio: false },
});

// 3. Filter and Update Function
function updateDashboard() {
  const startYear = parseInt(startSelect.value);
  const endYear = parseInt(endSelect.value);

  if (startYear > endYear) {
    alert("Start year cannot be later than end year.");
    return;
  }

  // Find indices for slicing
  const startIndex = years.indexOf(startYear);
  const endIndex = years.indexOf(endYear) + 1;

  // Filter Data
  const filteredLabels = years.slice(startIndex, endIndex);
  const filteredAll = allData.slice(startIndex, endIndex);
  const filteredMale = maleData.slice(startIndex, endIndex);
  const filteredFemale = femaleData.slice(startIndex, endIndex);

  // Update Chart
  trendChart.data.labels = filteredLabels;
  trendChart.data.datasets[0].data = filteredMale;
  trendChart.data.datasets[1].data = filteredAll;
  trendChart.data.datasets[2].data = filteredFemale;
  trendChart.update();

  // Update Metrics (KPIs)
  const latestRate = filteredAll[filteredAll.length - 1];
  const peakVal = Math.max(...filteredAll);
  const peakYear = filteredLabels[filteredAll.indexOf(peakVal)];
  const latestMale = filteredMale[filteredMale.length - 1];
  const latestFemale = filteredFemale[filteredFemale.length - 1];

  // Calculate % change within selected range
  const firstRate = filteredAll[0];
  const reduction = (((latestRate - firstRate) / firstRate) * 100).toFixed(0);

  document.getElementById("currentRate").innerText = latestRate.toFixed(2);
  document.getElementById("peakRate").innerText = peakVal.toFixed(2);
  document.getElementById(
    "peakRate"
  ).nextElementSibling.innerText = `Peak Rate (${peakYear})`;
  document.getElementById("genderGap").innerText =
    (latestMale / latestFemale).toFixed(1) + "x";
  document.getElementById("reduction").innerText =
    (reduction > 0 ? "+" : "") + reduction + "%";
  document.getElementById(
    "reduction"
  ).nextElementSibling.innerText = `Change in Period`;

  document.getElementById(
    "filterStatus"
  ).innerText = `Viewing: ${startYear} - ${endYear}`;
}

// Regional Chart (Static for now as it's 2019 data)
const ctxRegion = document.getElementById("regionChart").getContext("2d");
new Chart(ctxRegion, {
  type: "doughnut",
  data: {
    labels: ["WHO Euro Region", "EU Members", "Nordic Countries"],
    datasets: [
      {
        label: "Suicide Rate (2019)",
        data: [8.72, 8.82, 11.23],
        backgroundColor: ["#34495e", "#3498db", "#e67e22"],
      },
    ],
  },
  options: { responsive: true, maintainAspectRatio: false },
});



// --- Philippine Demographic Data (2023 Estimates) ---
const ageLabels = ["0-14", "15-19", "20-29", "30-44", "45-59", "60+"];
const phMaleCases = [45, 210, 580, 420, 290, 150];
const phFemaleCases = [30, 180, 310, 190, 110, 60];

const ctxPH = document.getElementById("phDemographicChart").getContext("2d");
new Chart(ctxPH, {
  type: "bar",
  data: {
    labels: ageLabels,
    datasets: [
      {
        label: "Male",
        data: phMaleCases,
        backgroundColor: "#e74c3c", // Matching the danger/male theme
        borderRadius: 5,
      },
      {
        label: "Female",
        data: phFemaleCases,
        backgroundColor: "#3498db", // Matching the female theme
        borderRadius: 5,
      },
    ],
  },
  options: {
    indexAxis: 'y', // Makes it a horizontal bar chart
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      x: { 
        stacked: false,
        title: { display: true, text: 'Total Reported Cases' }
      },
      y: { 
        title: { display: true, text: 'Age Range' }
      }
    }
  },
});