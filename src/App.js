export default {
  name: 'Invoice',
  data () {
    return {
      current: {},
      rows: []
    }
  },
  methods: {
    pushData (current) {
      const obj = { ...current }
      this.rows.push(obj)
    },

    removeRow (index) {
      this.rows.splice(index, 1)
    }
  },
  computed: {
    total () {
      let total = 0
      for (let i = 0; i < this.rows.length; i++) {
        total += Number(this.rows[i].quantity)*Number(this.rows[i].price)
      }

      return total
    }
  }
}
