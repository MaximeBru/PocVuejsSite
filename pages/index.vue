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
          v-for="article in articles"
          :key="article.id"
          class="snip1208">
          <img :src="'http://localhost:1337' + article.articleImg.url"
            alt="sample66"/>
          <div class="date">
            <span class="day">{{ $moment(article.created_at).format('DD') }}</span>
            <span class="month">{{ $moment(article.created_at).format('MMM') }}</span>
          </div>
          <figcaption>
            <h3>{{ article.Titre }}</h3>
            <p>
              {{ article.contenu.slice(0, 300) || 'No contenu provided.' }}...
            </p>
            <button>Read More</button>
            <nuxt-link :to="'/article/' + article.id" />
          </figcaption>
          <nuxt-link :to="'/article/' + article.id" />
        </figure>
        <div class="arrow-container">
          <nuxt-link :to="'/articles/'">
            <p>
              View All
              <i class="fas fa-angle-right arrow-right" />
            </p>
          </nuxt-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Myslider from '~/components/Myslider.vue'
import VueMoment from 'vue-moment'
import * as moment from 'moment'

export default {
  components: { Myslider },
    mounted () {
    this.$store.dispatch('GET_ARTICLES')
  },
  computed: mapState([
    'articles'
  ]),

  methods: {

  },
}
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>
