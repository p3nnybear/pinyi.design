var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ["Clothing", "Electronic product", "Books", "Cosmetic",  "Food", "Flight Supplies", "Home Supplies", "Photography stuffs", "household objects", "misc"],
      datasets: [
        {
          label: "items bought online",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [40,32,20,19,15,1,1,1,1,1]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Kind of items respondents buy online'
      }
    }
});