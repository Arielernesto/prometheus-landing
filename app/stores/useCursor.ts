
export const useCursor = defineStore('counter', {
  state: () => ({ hoverClick: false, text: "", color: "" }),
  actions: {
    activateHoverClickPhoto(color: string) {
      const PrimitiveColor = computed(() => {
        switch (color) {
          case 'blue':
            return '#6366F1'
          case 'violet':
            return '#6D28D9'
          case 'green':
            return '#14B8A6'
          case 'dark':
            return '#22C55E'
          default:
            return '#6366F1'
        }
      })

        this.hoverClick = true
        this.color = PrimitiveColor.value
        this.text = "Click"
    },
    desactivateHoverClickPhoto() {
        this.hoverClick = false
        this.text = ""
        this.color = ""
    }
  },
})
