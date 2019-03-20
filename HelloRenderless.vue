<script>
export default {
  name: 'HelloRenderless',
  data: function () {
    return {
      message: 'Hello, Renderless Vue component!',
      total: 0
    };
  },
  methods: {
    up: function () {
      this.total = this.total + 1;
    },
    down: function () {
      this.total = this.total - 1;
    }
  },
  render: function (hyperScript) {
    return this.$scopedSlots.default({
      message: this.message,
      total: this.total,
      up: this.up,
      down: this.down
    });
  }
}
</script>
