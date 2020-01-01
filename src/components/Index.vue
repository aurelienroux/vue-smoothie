<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.index">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data() {
    return {
      smoothies: []
    }
  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => smoothie.id !== id)
    }
  },
  created() {
    db.collection('smoothies')
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
        })
      })
  }
}
</script>

<style lang="scss">
.index {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 60px;

  & h2 {
    font-size: 1.8em;
    margin-top: 0;
    text-align: center;
  }

  & .ingredients {
    margin: 30px;

    & li {
      display: inline-block;
    }
  }

  & .delete {
    color: #aaa;
    cursor: pointer;
    font-size: 1.4em;
    position: absolute;
    right: 4px;
    top: 4px;
  }
}
</style>
