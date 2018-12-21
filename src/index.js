export default {
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      const { visibilityChanged } = this.$options
      if ((typeof visibilityChanged).toLowerCase() !== 'function') {
        return
      }
      const visible = entry.intersectionRatio > 0
      visibilityChanged.bind(this)(visible)
    })
    this.observer.observe(this.$el)
  },
  beforeDestroy() {
    this.observer.disconnect()
  }
}
