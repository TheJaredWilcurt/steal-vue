<template>
  <p class="hello-vue-no-styles">{{ message }}</p>
</template>

<script>
export default {
  name: 'HelloNoStyle',
  data: function () {
    return {
      message: 'Hello, Vue without style tag'
    };
  },
  methods: {
    log: function (value) {
      console.log(value);
    }
  }
};
</script>
