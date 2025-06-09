const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Visitors',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = 'index.html';
}
