import utils from 'services/utils'

const breadcrumbs = state => {
  return (keyword) => utils.findInNestedByName(state.menu.items, keyword)
}
const config = state => state.app.config
const isLoading = state => state.app.isLoading
const isLoggedIn = state => state.isLoggedIn
const menuItems = state => state.menu.items
const palette = state => state.app.config.palette
const sidebarOpened = state => state.app.sidebar.opened
const toggleWithoutAnimation = state => state.app.sidebar.withoutAnimation

export {
  breadcrumbs,
  config,
  isLoading,
  isLoggedIn,
  menuItems,
  palette,
  sidebarOpened,
  toggleWithoutAnimation,
}
