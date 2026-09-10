import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isMobileNavOpen: false,
  }),
  actions: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen
    },
    closeMobileNav() {
      this.isMobileNavOpen = false
    },
  },
})