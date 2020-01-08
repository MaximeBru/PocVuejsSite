<template>
  <div class="content">
    <main>
      <!--=========================== section article========================== -->
      <h1 class="articleTilte">
        PoC Site avec Vuejs
      </h1>
      <Myslider />
      <section class="SecNews">
        <figure
          v-for="article in articles.slice(0, 4)"
          :key="article.id"
          class="snip1208">
          <img
            :src="'http://localhost:1337' + article.articleImg.url"
            alt="sample66"/>
          <div class="date">
            <span class="day">{{ $moment(article.date).format('DD') }}</span>
            <span class="month">{{ $moment(article.date).format('MMM') }}</span>
          </div>
          <figcaption>
            <h3>{{ article.Titre }}</h3>
            <p>
              {{ article.contenu.slice(0, 300) || 'No contenu provided.' }}...
            </p>
            <button>Read More</button>
            <a :href="'article/' + article.id" />
          </figcaption>
          <a :href="'article/' + article.id" />
        </figure>
        <div class="arrow-container">
          <a :href="'articles/'">
            <p>
              View All
              <i class="fas fa-angle-right arrow-right" />
            </p>
          </a>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import axios from 'axios'
import Myslider from '~/components/Myslider.vue'
import VueMoment from 'vue-moment'
import * as moment from 'moment'

export default {
  components: { Myslider },
  async fetch({ store, params }) {
    return (
      axios
        .get('http://localhost:1337/articles')
        /*     this.$store.commit('initial', res.data) */
        .then((res) => {
          store.commit('articles', res.data)
        })
    )
  },

  computed: {
    ...mapState({
      articles: (state) => state.articles,
      list: (state) => state.list,
      imageUrl: (state) => state.articles.articleImg.Url,
      article: (state) => state.article,
      initial: (state) => state.articles
    })
  },
  methods: {
    ...mapMutations([
      'articles',
      'set',
      'increment',
      'reset',
      'article',
      'initial'
    ])
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
