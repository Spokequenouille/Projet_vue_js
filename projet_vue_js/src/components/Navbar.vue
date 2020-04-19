<template>
    <div class="navbar">        
        <button class="btn" @click="goToHome">Home</button>
        <button class="btn" @click="goToPokedex">Pokedex</button>      
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    methods: {
        goToHome() {
            this.$router.push({ path: '/' });
        },
        goToPokedex() {
            this.$router.push({ path: '/pokedex' });
        }
    }
}
</script>
<style>
.navbar {
    position: absolute;
    width:100%;
    top: 0;
    display: flex;
    background-color: lightgray;
    height: 40px;
}

.btn {
    background: transparent;
    border: none;
    padding: 10px;
    border-right: 1px solid gray;
}

.btn:hover {
    background: dimgray;
    color:white;
    cursor: pointer;
}

</style>
