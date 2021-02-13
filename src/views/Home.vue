<template>
  <div class="home">
    Home
    <p>my name is {{ name }}</p>
    <p>my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "mario";
    let age = "30";

    const handleClick = () => console.log("you click me");
    return {
      name: name,
      age: age,
      handleClick,
    };
  },
};
</script>
