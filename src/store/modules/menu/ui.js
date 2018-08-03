import lazyLoading from './lazyLoading'

export default {
  name: 'ui',
  meta: {
    expanded: false,
    title: 'menu.uiElements',
    iconClass: 'vuestic-icon vuestic-icon-ui-elements',
  },
  children: [
    {
      name: 'Typography',
      path: '/ui/typography',
      component: lazyLoading('ui/typography/Typography'),
      meta: {
        title: 'menu.typography',
        requiresAuth: true,
      }
    },
    {
      name: 'Buttons',
      path: '/ui/buttons',
      component: lazyLoading('ui/buttons/Buttons'),
      meta: {
        title: 'menu.buttons',
        requiresAuth: true,
      }
    },
    {
      name: 'Notifications',
      path: '/ui/notifications',
      component: lazyLoading('ui/notifications/Notifications'),
      meta: {
        title: 'menu.notifications',
        requiresAuth: true,
      }
    },
    {
      path: '/ui/icons',
      component: lazyLoading('ui/icons/Icons'),
      meta: {
        title: 'menu.icons',
        requiresAuth: true,
      },
      children: [
        {
          path: '', // Default route
          component: lazyLoading('ui/icons/SetsList'),
          meta: {
            title: 'menu.icons',
            requiresAuth: true,
          }
        },
        {
          path: ':name',
          component: lazyLoading('ui/icons/Set'),
          props: true,
          meta: {
            title: 'Set',
            requiresAuth: true,
          }
        }
      ]
    },
    {
      name: 'Spinners',
      path: '/ui/spinners',
      component: lazyLoading('ui/spinners/Spinners'),
      meta: {
        title: 'menu.spinners',
        requiresAuth: true,
      }
    },
    {
      name: 'Grid',
      path: '/ui/grid',
      component: lazyLoading('ui/grid/Grid'),
      meta: {
        title: 'menu.grid',
        requiresAuth: true,
      }
    },
    {
      name: 'Modals',
      path: '/ui/modals',
      component: lazyLoading('ui/modals/Modals'),
      meta: {
        title: 'menu.modals',
        requiresAuth: true,
      }
    },
    {
      name: 'TreeView',
      path: '/ui/tree-view',
      component: lazyLoading('ui/tree-view/TreeView'),
      meta: {
        title: 'menu.treeView',
        requiresAuth: true,
      }
    },
  ]
}

