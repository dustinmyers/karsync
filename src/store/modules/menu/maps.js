import lazyLoading from './lazyLoading'

export default {
  name: 'Maps',
  meta: {
    expanded: false,
    title: 'menu.maps',
    iconClass: 'vuestic-icon vuestic-icon-maps',
    requiresAuth: true,
  },

  children: [
    {
      name: 'GoogleMaps',
      path: '/maps/google-maps',
      component: lazyLoading('maps/google-maps/GoogleMapsPage'),
      meta: {
        title: 'Google Maps'
      }
    },
    {
      name: 'YandexMaps',
      path: '/maps/yandex-maps',
      component: lazyLoading('maps/yandex-maps/YandexMapsPage'),
      meta: {
        title: 'Yandex Maps'
      }
    },
    {
      name: 'LeafletMaps',
      path: '/maps/leaflet-maps',
      component: lazyLoading('maps/leaflet-maps/LeafletMapsPage'),
      meta: {
        title: 'Leaflet Maps'
      }
    },
    {
      name: 'BubbleMaps',
      path: '/maps/bubble-maps',
      component: lazyLoading('maps/bubble-maps/BubbleMapsPage'),
      meta: {
        title: 'Bubble Maps'
      }
    },
    {
      name: 'LineMaps',
      path: '/maps/line-maps',
      component: lazyLoading('maps/line-maps/LineMapsPage'),
      meta: {
        title: 'Line Maps',
        requiresAuth: true
      }
    }
  ]
}
