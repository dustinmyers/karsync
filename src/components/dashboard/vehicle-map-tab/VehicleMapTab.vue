<template>
  <div class="vehicle-map-tab dashboard-tab">
    <div class="row">
      <div class="col-md-12">
        <div class="chart-container">
          <google-map :positions="positions"></google-map>
          <!--<vuestic-chart v-bind:data="donutChartData" type="donut"></vuestic-chart>-->
        </div>
      </div>
      <!--<div class="col-md-6">-->
        <!--<vuestic-data-table-->
          <!--:apiMode="apiMode"-->
          <!--:tableData="tableData"-->
          <!--:tableFields="tableFields"-->
          <!--:itemsPerPage="itemsPerPage"-->
          <!--:onEachSide="onEachSide"-->
          <!--:sortFunctions="sortFunctions"-->
          <!--:dataModeFilterableFields="dataModeFilterableFields"-->
        <!--/>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import BadgeColumn from 'components/tables/BadgeColumn.vue'
  import GoogleMap from '../../maps/google-maps/GoogleMap'

  Vue.component('badge-column', BadgeColumn)

  export default {
    name: 'vehicle-map-tab',
    components: {
      GoogleMap,
    },

    props: {
      positions: Array,
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../sass/_variables.scss";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins/breakpoints";

  .chart-container {
    padding: 0 2rem;
    height: calc(100vh - 72px - 24px - 24px - 84px - 24px - 24px - 24px - 24px - 24px - 24px - 32px);
  }


</style>
