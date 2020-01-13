<template>
  <section class="container">
    <main>
      <section id="PartieNews" class="SecNews">
        <h2 class="NewsTilte">
          Articles
        </h2>
        <figure v-for="article in articles" :key="article.id" class="snip1208">
          <img
            :src="'http://localhost:1337' + article.articleImg.url"
            alt="sample66"
          />
          <div class="date">
            <span class="day">{{ $moment(article.created_at).format('DD') }}</span>
            <span class="month">
              {{ $moment(article.created_at).format('MMM') }}
            </span>
          </div>
          <figcaption>
            <h3>{{ article.Titre }}</h3>
            <p>
              {{ article.contenu.slice(0, 300) || 'No description provided.' }}
            </p>
            <button>Read More</button>
          </figcaption>
          <nuxt-link :to="'/article/' + article.id" />
        </figure>
      </section>
    </main>
  </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
//import VueMoment from 'vue-moment'
//import * as moment from 'moment'
export default {
  components: {},
  mounted() {
    this.$store.dispatch('GET_ARTICLES')
  },
  computed: mapState(['articles']),
  head: {
    /*     title: this.title, */
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Page des articles'
      }
    ]
  }
}
</script>
<style scoped></style>
