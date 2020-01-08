<template>
  <section class="container">
    <main>
      <section id="PartieNews" class="SecNews">
        <h2 class="NewsTilte">Articles</h2>
        <figure v-for="article in articles" :key="article.id" class="snip1208">
          <img :src="'http://localhost:1337' + article.articleImg.url" alt="sample66" />
          <div class="date">
            <span class="day">{{ $moment(article.date).format('DD') }}</span>
            <span class="month">
              {{
              $moment(article.date).format('MMM')
              }}
            </span>
          </div>
          <figcaption>
            <h3>{{ article.Titre }}</h3>
            <p>{{ article.contenu.slice(0, 300) || 'No description provided.' }}</p>
            <button>Read More</button>
          </figcaption>
          <a :href="'article/' + article.id" />
        </figure>
      </section>
    </main>
  </section>
</template>

<script>
  import Vue from 'vue'
  import { mapState, mapMutations } from 'vuex'
  import axios from 'axios'
  //import VueMoment from 'vue-moment'
  //import * as moment from 'moment'
  export default {
    components: {},
    async fetch({ store, params }) {
      return axios
        .get('http://localhost:1337/articles')

        .then((res) => {
          store.commit('articles', res.data)
        })
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
      ...mapMutations(['get_articles', 'set', 'increment', 'reset'])
    },
    head: {
      /*     title: this.title, */
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Ma description personnalisée'
        }
      ]
    }
  }
</script>
<style scoped></style>
