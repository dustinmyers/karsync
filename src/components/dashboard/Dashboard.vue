<template>
  <div class="dashboard">

    <!--<dashboard-info-widgets></dashboard-info-widgets>-->

    <vuestic-widget class="no-padding no-v-padding">
      <vuestic-tabs
        :names="[$t('dashboard.vehicleMap'), $t('dashboard.usersAndMembers'), $t('dashboard.setupProfile')]"
        ref="tabs">
        <div
          v-if="(positions && positions.length) || !positionsLoading || !vehiclesLoading"
          :slot="$t('dashboard.vehicleMap')"
        >
          <vehicle-map-tab :positions="positions"></vehicle-map-tab>
        </div>
        <div :slot="$t('dashboard.usersAndMembers')">
          <users-members-tab></users-members-tab>
        </div>
        <div :slot="$t('dashboard.setupProfile')">
          <setup-profile-tab></setup-profile-tab>
        </div>
        <!--<div :slot="$t('dashboard.features')">-->
          <!--<features-tab></features-tab>-->
        <!--</div>-->
      </vuestic-tabs>
    </vuestic-widget>

    <!--<dashboard-bottom-widgets></dashboard-bottom-widgets>-->

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import axios from 'axios'

  import DashboardInfoWidgets from './DashboardInfoWidgets'
  import UsersMembersTab from './users-and-members-tab/UsersMembersTab.vue'
  import SetupProfileTab from './setup-profile-tab/SetupProfileTab.vue'
  import FeaturesTab from './features-tab/FeaturesTab.vue'
  import VehicleMapTab from './vehicle-map-tab/VehicleMapTab.vue'
  import DashboardBottomWidgets from './DashboardBottomWidgets.vue'

  export default {
    name: 'dashboard',
    components: {
      DashboardInfoWidgets,
      UsersMembersTab,
      SetupProfileTab,
      FeaturesTab,
      DashboardBottomWidgets,
      VehicleMapTab
    },

    computed: {
      ...mapGetters([
        'positions',
        'positionsLoading',
        'vehicles',
        'vehiclesLoading'
      ])
    },

    created () {
      axios.defaults.headers.common.Authorization = localStorage.getItem('karsyncToken')
      this.getVehicles()
      this.getTripDataByVehicleId()
    },

    methods: {
      ...mapActions([
        'getTripDataByVehicleId',
        'getVehicles'
      ]),
      launchEpicmaxToast () {
        this.showToast(`Let's work together!`, {
          icon: 'fa-star-o',
          position: 'top-right',
          duration: Infinity,
          action: {
            text: 'Hire us',
            href: 'http://epicmax.co/#/contact',
            class: 'vuestic-toasted-link'
          }
        })
      },
    },
  }

</script>

<style lang="scss" scoped>
  @import "../../sass/_variables.scss";
</style>
