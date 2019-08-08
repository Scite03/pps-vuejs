<template>
    <div>
        <h1 class="title">Chart</h1>
        <button @click="toggle()" class="button">Toggle</button>
        <button @click="get()" class="button">Get</button>
        <ApexChart ref="myChart" :type="types[idx]" :options="options" :series="series"  />
    </div>
</template>
<script>
import jsPDF from 'jspdf';

export default {
    data() {
        return {
            idx: 0
        }
    },
    methods: {
        toggle() {
            if (this.idx == this.types.length) {
                this.idx = 0
            } else {
                this.idx += 1
            }
        },
        get() {
            this.$refs.myChart.chart.dataURI().then(uri => {
                const pdf = new jsPDF()
                pdf.addImage(uri, 'PNG', 0, 0)
                pdf.save('download.pdf')
            })
        }
    },
    computed: {
        types() {
            return ['line', 'bar', 'area']
        },
        series() {
            return [
                {
                    name: '2019', 
                    data: [3,1,5,6,9]
                },
                {
                    name: '2018', 
                    data: [5,6,8,9,8]
                }
            ]
        },
        options() {
            return {
                xaxis: {
                    categories: ['Dap A', 'Dap B', 'Dap C']
                }
            }
        }
    }
}
</script>
