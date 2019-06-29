import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tableData: [
        {
      name: 'Jack',
      surname: 'Wilson',
      phone: '+233-332-32-232',
      email: 'wilsonbest@gmail.com',
    }, {
      name: 'Will',
      surname: 'Smit',
      phone: '+101-777-77-777-77',
      email: 'smitonelove@gmail.com',
    }, {
      name: 'John',
      surname: 'Snow',
      phone: '+2123-123123-12321',
      email: 'jdnfjdsd@gmai.com',
    }
    ]

  },
  mutations: {
    addItemToTableData: (state, value) => {
      state.tableData.push(value)
    },
    deleteItemTableData: (state, value) => {
      state.tableData.splice(value, 1)
    },
    editItemTableData: (state, data) => {
      state.tableData[data.id] = data.value
    },



  },
  actions: {

  },
  plugins: [createPersistedState()]
})
