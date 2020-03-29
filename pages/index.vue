<template>
  <div class="container">
    <div class="container" id="print-me">
      <div class="columns is-multiline is-mobile">
        <div v-for="item in active" :key="item.id" class=" column is-one-fifth">
          {{ item.id }}
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <button class="button" @click="randomize()">Randomize</button>
        <button class="button" @click="print()">Print</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: {},
      items: [
        { id: 'dog', src: null },
        { id: 'runner', src: null },
        { id: 'bike', src: null },
        { id: 'red-car', src: null },
        { id: 'blue-car', src: null },
        { id: 'rainbow', src: null },
        { id: 'truck', src: null },
        { id: 'basketball-hoop', src: null },
        { id: 'wreath', src: null },
        { id: 'flag', src: null },
        { id: 'squirrel', src: null },
        { id: 'yard-worker', src: null },
        { id: 'fence', src: null },
        { id: 'stop-sign', src: null },
        { id: 'fire-hydrant', src: null },
        { id: 'the-wind', src: null },
        { id: 'tree', src: null },
        { id: 'flower', src: null },
        { id: 'bush', src: null },
        { id: 'yellow-leaf', src: null },
        { id: 'green-leaf', src: null },
        { id: 'stick', src: null },
        { id: 'clouds', src: null },
        { id: 'chalk-drawing', src: null },
        { id: 'random-thing', src: null }
      ]
    }
  },
  mounted() {
    this.randomize()
  },
  methods: {
    print() {
      window.open('/')
      // this.$htmlToPaper('print-me')
    },
    randomize() {
      this.items = this.shuffle(this.items)
      this.active = this.items.slice(0, 24)
      this.active.splice(12, 0, { id: '', src: null })
    },
    shuffle(array) {
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    }
  }
}
</script>

<style></style>
