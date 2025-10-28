
export const useCursor = defineStore('counter', {
  state: () => ({ hoverClick: false, text: "", color: "" }),
  actions: {
    activateHoverClickPhoto(color: string) {
        this.hoverClick = true
        this.color = color
        this.text = "Click"
    },
    desactivateHoverClickPhoto() {
        this.hoverClick = false
        this.text = ""
        this.color = ""
    }
  },
})
