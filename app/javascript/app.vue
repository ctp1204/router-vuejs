<template>
  <div id="app">
    <div class="container">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        message: "Hello Vue!12121"
      }
    }
  }
</script>

<style scoped>
  p {
    font-size: 60px;
    text-align: center;
    color: green;
    font-weight: bold;
  }
</style>
