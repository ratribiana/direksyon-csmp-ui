/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Direksyon - CSMP
  Author: Robert Anthony Tribiana - Direksyon LLC
  Author URL: http://robtribiana.com
==========================================================================================*/


export default {
  ADD_EVENT (state, event) {
    state.events.push(event)
  },
  SET_EVENTS (state, events) {
    state.events = events
  },
  SET_LABELS (state, labels) {
    state.eventLabels = labels
  },
  UPDATE_EVENT (state, event) {
    const eventIndex = state.events.findIndex((e) => e.id === event.id)
    Object.assign(state.events[eventIndex], event)
  },
  REMOVE_EVENT (state, eventId) {
    const eventIndex = state.events.findIndex((e) => e.id === eventId)
    state.events.splice(eventIndex, 1)
  }
}
