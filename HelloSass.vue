<template>
  <p class="hello-sass">{{ message }}</p>
</template>

<script>
export default {
  name: 'HelloSass',
  data: function () {
    return {
      message: 'Hello, Vue with Sass!'
    };
  },
  methods: {
    log: function (value) {
      console.log(value);
    }
  }
};
</script>

<style lang="sass">
p
    padding: 20px

p.hello-sass
    color: lightseagreen
    font-weight: bold

</style>
