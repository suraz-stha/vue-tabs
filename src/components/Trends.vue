<template>
    <div>
        <h2>Trends</h2>
        <canvas id="trend-chart"> </canvas>
    </div>
</template>

<script>
import Chart from "chart.js"
import TrendsChart from "../TrendsChart"
export default {
    name: "trends",
    data: function() {
        return {
            TrendsChart


        }
    },
    mounted(){
        const ctx = document.getElementById("trend-chart")
        new Chart(ctx, this.TrendsChart)
    }
    
}
</script>