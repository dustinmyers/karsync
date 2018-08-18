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
        const positionsArr = this.positions.flatMap(position => ([{
          startPosition: {
            'title': position.vehicleName,
            'lat': position.startLat,
            'lng': position.startLon,
          },
          endPosition: {
            'title': position.vehicleName,
            'lat': position.endLat,
            'lng': position.endLon,
          }
        }]))
        console.log(positionsArr)
        const image = '/static/car-map-icon.png'

        const positionsArrLength = positionsArr.length
        /* eslint-disable no-new */
        const map = new google.maps.Map(this.$el, {
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          center: new google.maps.LatLng(
            positionsArr[positionsArrLength - 1].lat, positionsArr[positionsArrLength - 1].lng
          ),
          zoom: 8
        })

        const bounds = new google.maps.LatLngBounds()
        const infowindow = new google.maps.InfoWindow()

        positionsArr.forEach((e, index, arr) => {
          const startLatLng = new google.maps.LatLng(e.startPosition.lat, e.startPosition.lng)
          if (index === 0 || index === arr.length - 1) {}
          const startMarker = new google.maps.Marker({
            position: startLatLng,
            // label: {
            //   color: '#00046c',
            //   fontWeight: 'bold',
            //   text: e.title,
            // },
            icon: image,
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
          bounds.extend(startMarker.position)

          google.maps.event.addListener(startMarker, 'click', (marker => {
            return () => {
              infowindow.setContent(marker.name)
              infowindow.open(map, marker)
            }
          })(startMarker, index))
        })

        positionsArr.forEach((e, index, arr) => {
          const endLatLng = new google.maps.LatLng(e.endPosition.lat, e.endPosition.lng)
          if (index === 0 || index === arr.length - 1) {}
          const endMarker = new google.maps.Marker({
            position: endLatLng,
            // label: {
            //   color: '#00046c',
            //   fontWeight: 'bold',
            //   text: e.title,
            // },
            icon: image,
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
          bounds.extend(endMarker.position)

          google.maps.event.addListener(endMarker, 'click', (marker => {
            return () => {
              infowindow.setContent(marker.name)
              infowindow.open(map, marker)
            }
          })(endMarker, index))
        })

        // now fit the map to the newly inclusive bounds
        map.fitBounds(bounds)

        // (optional) restore the zoom level after the map is done scaling
        // const listener = google.maps.event.addListener(map, 'idle', function () {
        //   map.setZoom(10)
        //   google.maps.event.removeListener(listener)
        // })

        // positionsArr.forEach((trip, index, arr) => {
        //   const path = new google.maps.MVCArray()
        //   const service = new google.maps.DirectionsService()
        //   const poly = new google.maps.Polyline({ map: map, strokeColor: '#4986E7' })
        //   const src = new google.maps.LatLng(trip.startPosition.lat, trip.startPosition.lng)
        //   const des = new google.maps.LatLng(trip.endPosition.lat, trip.endPosition.lng)
        //   path.push(src)
        //   poly.setPath(path)
        //   service.route({
        //     origin: src,
        //     destination: des,
        //     travelMode: google.maps.DirectionsTravelMode.DRIVING
        //   }, (result, status) => {
        //     if (status === google.maps.DirectionsStatus.OK) {
        //       result.routes[0].overview_path.forEach(e => path.push(e))
        //     }
        //   })
        // })
      })
    },
    props: {
      positions: Array,
    }
  }
</script>

<style lang="scss">
  @import "../../../sass/_variables.scss";

  .google-map {
    height: 100%;
  }
</style>
