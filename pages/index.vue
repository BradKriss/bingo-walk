<template>
  <div class="container">
    <div class="section no-print">
      <div class="container">
        <h1 class="is-size-2">Neighborhood Walk Bingo</h1>
      </div>
      <div class="container" style="margin-top:1em;">
        <button class="button " @click="randomize()">Randomize</button>
        <button class="button" @click="print()">Print</button>
      </div>
    </div>
    <div class="container items-container">
      <div class="columns is-multiline is-mobile is-centered is-vcentered">
        <div
          v-for="item in active"
          :key="item.id"
          class=" column is-one-fifth item-outer-div"
        >
          <div class="item-div">
            <div class="item-img-div">
              <img v-if="item.src" class="item-img" :src="item.src" />
            </div>
            <div class="item-text">{{ formatName(item.id) }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section no-print">
      <div class="container"></div>
    </div>
    <footer class="footer no-print">
      <div class="content has-text-centered">
        <p>
          Made by <strong>Brad Kriss</strong> |
          <a href="https://bradkriss.com/">Website</a> |
          <a href="https://github.com/BradKriss/bingo-walk">Github</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Neighborhood Walk Bingo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A fun activity for family walks'
        }
      ]
    }
  },
  data() {
    return {
      active: {},
      items: [
        {
          id: 'dog',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/dog.png'
        },
        {
          id: 'runner',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/runner.jpg'
        },
        {
          id: 'bike',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/bike.png'
        },
        {
          id: 'red-car',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/red-car.png'
        },
        {
          id: 'blue-car',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/blue-car.png'
        },
        {
          id: 'rainbow',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/rainbow.png'
        },
        {
          id: 'truck',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/truck.jpg'
        },
        {
          id: 'basketball-hoop',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585506136/bingo-walk/basketball-hoop.png'
        },
        {
          id: 'wreath',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/wreath.jpg'
        },
        {
          id: 'flag',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/flag.gif'
        },
        {
          id: 'squirrel',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585506039/bingo-walk/squirrel.png'
        },
        {
          id: 'yard-worker',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505158/bingo-walk//yard-worker.png'
        },
        {
          id: 'fence',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/fence.jpg'
        },
        {
          id: 'stop-sign',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585573704/bingo-walk/stop-sign.png'
        },
        {
          id: 'fire-hydrant',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/fire-hydrant.png'
        },
        {
          id: 'wind',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/wind.png'
        },
        {
          id: 'tree',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/tree.png'
        },
        {
          id: 'flower',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/flower.png'
        },
        {
          id: 'bush',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/bush.png'
        },
        {
          id: 'yellow-leaf',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/yellow-leaf.png'
        },
        {
          id: 'green-leaf',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/green-leaf.png'
        },
        {
          id: 'stick',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505156/bingo-walk/stick.png'
        },
        {
          id: 'cloud',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/cloud.png'
        },
        {
          id: 'chalk-drawing',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1585505157/bingo-walk/chalk-drawing.jpg'
        },
        {
          id: 'ball',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1586011542/bingo-walk/bird.png'
        },
        {
          id: 'bird',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1586011542/bingo-walk/bird.png'
        },
        {
          id: 'cat',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1586011542/bingo-walk/cat.png'
        },
        {
          id: 'lawn-chair',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1586011835/bingo-walk/lawn-chair.png'
        },
        {
          id: 'mailbox',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1586011542/bingo-walk/mailbox.jpg'
        },
        {
          id: 'slide',
          src:
            'https://res.cloudinary.com/bradkriss/image/upload/w_125,h_125,c_fit/f_auto/q_auto/v1586011542/bingo-walk/slide.png'
        }
      ]
    }
  },
  mounted() {
    this.randomize()
  },
  computed: {},
  methods: {
    formatName(name) {
      console.log(name)
      return name.replace('-', ' ')
      // return name
    },
    print() {
      // window.open('/')
      window.print()
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

<style>
@media print {
  .no-print {
    display: none;
  }
}
.items-container {
  /* border: 1px black solid; */
  margin: 15px;
}
.item-outer-div {
  margin: -1px;
  border: 1px solid black;
  height: 175px;
}
.item-div {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.item-img {
  max-width: 100%;
}
.item-img-div {
  max-width: 100%;
  flex-grow: 2;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item-text {
  text-transform: capitalize;
}
</style>
