<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/aboutUs">About</router-link> |
    <router-link to="/contactUs">Contact</router-link>
  </div>
  <router-view />
    
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
  background: #f2f2f2;
}
#nav {
  padding: 30px;
  margin: 15px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
