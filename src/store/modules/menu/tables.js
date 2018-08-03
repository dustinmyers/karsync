import lazyLoading from './lazyLoading.js'

export default {
  name: 'tables',
  meta: {
    title: 'menu.tables',
    iconClass: 'vuestic-icon vuestic-icon-tables',
    requiresAuth: true,
  },
  path: '/tables',
  component: lazyLoading('tables/Table')
}
