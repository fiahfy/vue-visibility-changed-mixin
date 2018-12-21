export default {
  mounted() {
    this.visibilityChangedObserver = new IntersectionObserver(([entry]) => {
      const { visibilityChanged } = this.$options
      if ((typeof visibilityChanged).toLowerCase() !== 'function') {
        return
      }
      const visible = entry.intersectionRatio > 0
      visibilityChanged.bind(this)(visible)
    })
    this.visibilityChangedObserver.observe(this.$el)
  },
  beforeDestroy() {
    this.visibilityChangedObserver.disconnect()
  }
}
