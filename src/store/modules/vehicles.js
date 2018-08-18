// import moment from 'moment'
import api from '../api'

const GET_TRIP_DATA_FOR_VEHICLE = 'GET_TRIP_DATA_FOR_VEHICLE'
const GET_VEHICLES = 'GET_VEHICLES'
const GET_VEHICLES_SUCCESS = 'GET_VEHICLES_SUCCESS'
const GET_VEHICLES_ERROR = 'GET_VEHICLES_ERROR'
const GET_VEHICLES_LAST_POSITIONS = 'GET_VEHICLES_LAST_POSITION'
const GET_VEHICLES_LAST_POSITIONS_SUCCESS = 'GET_VEHICLES_LAST_POSITION_SUCCESS'
const GET_VEHICLES_LAST_POSITIONS_ERROR = 'GET_VEHICLES_LAST_POSITION_ERROR'

export default {
  state: {
    chosenVehicleId: null,
    errors: [],
    positions: [],
    positionsLoading: [],
    vehicles: [],
    vehiclesLoading: false,
  },
  actions: {
    async getVehiclesLastPositions ({ commit }) {
      commit(GET_VEHICLES_LAST_POSITIONS)
      commit(GET_VEHICLES_LAST_POSITIONS_SUCCESS, await api.getAll('positions'))
    },
    async getTripDataByVehicleId ({ commit }, id) {
      // const startOfDay = moment().startOf('day')
      // const endOfDay = moment().endOf('day')
      const url = `/tripsInformation/getTripsDataByVehicleId/1/1533362400/1533448799`
      commit(GET_TRIP_DATA_FOR_VEHICLE, await api.getAll(url))
    },
    async getVehicles ({ commit, dispatch, state, rootState }) {
      console.log(rootState)
      commit(GET_VEHICLES)
      commit(GET_VEHICLES_SUCCESS, await api.getById({ url: 'vehicles', id: rootState.authentication.user.id }).then(response => {
        response.forEach(vehicle => {
          const position = state.positions.find(v => v.vehicleId === vehicle.id)
          if (position) {
            position.vehicleName = vehicle.name
          }
        })
        return response
      }))
        // .catch(err => commit(GET_VEHICLES_ERROR, err))
    },
  },
  getters: {
    vehicles: state => state.vehicles,
    vehiclesLoading: state => state.vehiclesLoading,
    positions: state => state.positions,
    positionsLoading: state => state.positionsLoading
  },
  mutations: {
    [GET_TRIP_DATA_FOR_VEHICLE] (state, tripData) {
      state.positions = tripData.data
    },
    [GET_VEHICLES] (state) {
      state.vehiclesLoading = true
    },
    [GET_VEHICLES_SUCCESS] (state, vehicles) {
      state.vehiclesLoading = false
      state.vehicles = vehicles
    },
    [GET_VEHICLES_ERROR] (state, error) {
      console.log(error)
      state.vehiclesLoading = false
      state.errors.push(error)
    },
    [GET_VEHICLES_LAST_POSITIONS] (state) {
      state.positionsLoading = true
    },
    [GET_VEHICLES_LAST_POSITIONS_SUCCESS] (state, positions) {
      state.positionsLoading = false
      state.positions = positions
    },
    [GET_VEHICLES_LAST_POSITIONS_ERROR] (state, error) {
      console.log(error)
      state.positionsLoading = false
      state.errors.push(error)
    }
  }
}
