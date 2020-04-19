<template>
	<div id="app">
		<!-- Les images possèdent le meme nom que les types de pokemons, affichage de celles ci en grace aux types passés en props -->
		<img :src="require(`@/assets/typePokemon/${type_un}.png`)" width="50" />
		<!-- Optionel car un pokemon peut avoir 2 type -->
		<img
			v-if="typeof type_deux !== 'undefined'"
			:src="require(`@/assets/typePokemon/${type_deux}.png`)"
			width="50"
		/>
	</div>
</template>
<script>
export default {
	name: "TypePokemon",
	props: {
		type_un: String,
		type_deux: String
	}
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
