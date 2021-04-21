export const TrendsChart = {
    type: "bar",
    data: {
        labels: [
            "Jul 20",
            "Aug 20",
            "Sept 20",
            "Oct 20",
            "Nov 20",
            "Dec 20",
            "Jan 21",
            "Feb 21",
            "Mar 21",
            "Apr 21",
            "May 21",
            "Jun 21"

        ],
        datasets: [

            {
                label: "Planning",
                data: [
                    120000, 140000, 105000, 140000, 125000, 135000,150000, 110000, 155000, 170000, 145000, 165000
                ],
                borderWidth: 3,
                backgroundColor: 'red',
                beginAtZero: true,
                type: 'line',
                pointStyle: 'bar',
                showLine: false
            },
            {
                label: "Trends",
                data: [
                    125000, 135000, 115000, 145000, 120000, 125000, 140000, 110000, 150000, 165000, 145000, 170000


                ],
                borderWidth: 3,
                backgroundColor: 'blue'
            },
           
        ]
    },
    options: {
        tooltips: {
            mode: 'index',
            intersect: true
          },
          "horizontalLine": [{
            "y": 150000,
            "style": "rgba(255, 0, 0, .4)",
            "text": "max"
          }, {
            "y": 135000,
            "style": "#00ffff",
          }, {
            "y": 144000,
            "text": "min"
          }],
      

        responsive: true,
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            },
            yAxes: [
                {
                    stacked: false,
                    display:true,
                    ticks: {
                        beginAtZero: true,
                    }
                }
            ],
           
        },

       

       
    }
}



export default TrendsChart