<template>
  <p class="hello-vue">{{ message }}</p>
</template>

<script>
export default {
  name: 'Hello',
  data: function () {
    return {
      message: 'Hello, Vue!'
    };
  },
  methods: {
    log: function (value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
p {
  padding: 20px;
}

p.hello-vue {
  color: lightseagreen;
  font-weight: bold;
}
</style>
