<template>
	<div id="app">
		<apexchart type="radar" :options="chartOptions" :series="series"></apexchart>
	</div>
</template>

<script>
//utilisation vue-apexcharts pour créer un diagramme de type "radar"
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

export default {
	name: "StatPokemon",
	data: function() {
		return {
			series: [
				{
					//recupération des données passées en props
					data: [
						this.attack,
						this.defense,
						this.attack_spe,
						this.defense_spe,
						this.hp,
						this.vitesse
					]
				}
			],

			chartOptions: {
				chart: {
					type: "radar"
				},
				dataLabels: {
					enabled: true,
					style: {
						colors: ["#088DA5"]
					}
				},
				xaxis: {
					categories: [
						"Attaque",
						"Defense",
						"Attaque Spe",
						"Defense Spe",
						"HP",
						"Vitesse"
					],
					labels: {
						style: {
							colors: [
								"#088DA5",
								"#088DA5",
								"#088DA5",
								"#088DA5",
								"#088DA5",
								"#088DA5"
							]
						}
					}
				}
			}
		};
	},
	components: {
		apexchart: VueApexCharts
	},
	props: {
		attack: Number,
		defense: Number,
		attack_spe: Number,
		defense_spe: Number,
		hp: Number,
		vitesse: Number
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
