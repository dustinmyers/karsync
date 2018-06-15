<template>
  <div class="google-map">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as GoogleMapsLoader from 'google-maps'

  export default {
    name: 'google-map',

    computed: mapGetters({
      config: 'config'
    }),

    mounted () {
      GoogleMapsLoader.KEY = this.config.googleMaps.apiKey

      GoogleMapsLoader.load((google) => {
        /* eslint-disable no-new */
        const map = new google.maps.Map(this.$el, {
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: new google.maps.LatLng(41.923, 12.513),
          zoom: 8
        })

        const bounds = new google.maps.LatLngBounds()
        const infowindow = new google.maps.InfoWindow()

        this.vehicles.forEach((vehicle, index) => {
          const marker = new google.maps.Marker({
            position: new google.maps.LatLng(vehicle.latitude, vehicle.longitude),
            label: {
              color: '#00046c',
              fontWeight: 'bold',
              text: vehicle.vehicleName,
            },
            // icon: {
            //   labelOrigin: new google.maps.Point(9, 9),
            //   // url: 'https://static.thenounproject.com/png/331565-200.png',
            //   // size: new google.maps.Size(10, 10),
            //   // origin: new google.maps.Point(0, 0),
            //   // anchor: new google.maps.Point(11, 40),
            // },
            map
          })

          // extend the bounds to include each marker's position
          bounds.extend(marker.position)

          google.maps.event.addListener(marker, 'click', (marker => {
            return () => {
              infowindow.setContent(vehicle.name)
              infowindow.open(map, marker)
            }
          })(marker, index))
        })

        // now fit the map to the newly inclusive bounds
        map.fitBounds(bounds)

        // (optional) restore the zoom level after the map is done scaling
        // const listener = google.maps.event.addListener(map, 'idle', function () {
        //   map.setZoom(10)
        //   google.maps.event.removeListener(listener)
        // })
      })
    },
    props: {
      vehicles: Array,
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .google-map {
    height: 100%;
  }
</style>
