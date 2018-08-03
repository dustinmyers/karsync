import lazyLoading from './lazyLoading'

export default {
  name: 'Statistics',
  meta: {
    expanded: false,
    title: 'menu.statistics',
    iconClass: 'vuestic-icon vuestic-icon-statistics',
    requiresAuth: true,
  },

  children: [
    {
      name: 'menu.charts',
      path: '/statistics/charts',
      component: lazyLoading('statistics/charts/Charts'),
      meta: {
        title: 'menu.charts',
        requiresAuth: true
      }
    },
    {
      name: 'menu.progressBars',
      path: '/statistics/progress-bars',
      component: lazyLoading('statistics/progress-bars/ProgressBars'),
      meta: {
        title: 'menu.progressBars',
        requiresAuth: true
      }
    }
  ]
}
