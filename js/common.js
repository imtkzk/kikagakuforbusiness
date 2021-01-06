var app = new Vue({
  el: '#hamburger',
  data: {
    ActiveBtn: false
  }
});

/*  タブメニュー
-------------------------------------------------------*/
new Vue({
  el: '#tab',
  data: {
    isActive: '1'
  }
})

/*  accordion
-------------------------------------------------------*/

const acodTitle = document.querySelectorAll('.btnClick');

function toggle(){
  const content = this.nextElementSibling;
  this.classList.toggle('is-active');
  content.classList.toggle('is-open');
}

for (let i = 0; i < acodTitle.length; i ++){
  acodTitle[i].addEventListener('click', toggle)
}


/*  chartjs
-------------------------------------------------------*/

  var ctx = document.getElementById("myDoughnutChartResult01");
  var myDoughnutChartResult01= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["完了","学習中","未完了"],
      datasets: [{
          backgroundColor: [
              "#25a2aa",
              "#007dbd",
              "#f8f8f8"
          ],
          data: [30, 50, 20] //グラフのデータ
      }]
    },
    options: {
       responsive: true,
       maintainAspectRatio: false,
       legend: {
          display: false
       }
    }
  });
  var ctx = document.getElementById("myDoughnutChartGoal01");
  var myDoughnutChartGoal01= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["完了","学習中","未完了"],
      datasets: [{
        backgroundColor: [
            "#25a2aa",
            "#007dbd",
            "#f8f8f8"
        ],
        data: [30, 50, 20] //グラフのデータ
    }]
    },
    options: {
       responsive: true,
       maintainAspectRatio: false,
       legend: {
          display: false
       }
    }
  });
  var ctx = document.getElementById("myDoughnutChartResult02");
  var myDoughnutChartResult02= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["完了","学習中","未完了"],
      datasets: [{
        backgroundColor: [
            "#25a2aa",
            "#007dbd",
            "#f8f8f8"
        ],
        data: [30, 50, 20] //グラフのデータ
    }]
    },
    options: {
       responsive: true,
       maintainAspectRatio: false,
       legend: {
          display: false
       }
    }
  });
  var ctx = document.getElementById("myDoughnutChartGoal02");
  var myDoughnutChartGoal02= new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["完了","学習中","未完了"],
      datasets: [{
        backgroundColor: [
            "#25a2aa",
            "#007dbd",
            "#f8f8f8"
        ],
        data: [30, 50, 20] //グラフのデータ
    }]
    },
    options: {
       responsive: true,
       maintainAspectRatio: false,
       legend: {
          display: false
       }
    }
  });
  var ctx = document.getElementById("mybarChartlearnStatus");
  var mybarChartlearnStatus= new Chart(ctx, {
    type: 'bar', // チャートのタイプ
        data: { // チャートの内容
            labels: ["1/1", "1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/6", "1/8", "1/10"],
            datasets: [{
                type: 'line',
                label: 'テスト完了数',
                data: [10, 14, 6, 8, 1, 4, 14, 6, 8, 1, 4],
                lineTension: 0,
                fill: false,
                borderColor: '#007dbd',
                backgroundColor: '#007dbd',
                borderWidth: 2
            },{
              label: '動画完了視聴数',
              data: [1, 19, 3, 5, 2, 3, 19, 3, 5, 2, 3],
              backgroundColor: '#25a2aa',
              borderWidth: 0
          }]
        },
        options: { // チャートのその他オプション
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
  });

    