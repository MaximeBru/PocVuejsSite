const state = () => ({
  count: 0,
  list: [],
  article: [],
  articles: [],
  page_nb: 0,
  page_prev: 0,
  page_next: 0,
  marker_pos: [],
  initial: []
})

const mutations = {
  initial(state, articles) {
    state.articles = articles
  },
  set(state, e) {
    state.count = e.target.value
  },
  increment(state) {
    state.count++
  },
  reset(state) {
    state.count = 0
  },
  article(state, data) {
    state.article = data
  },

  articles: (state, articles) => {
    state.articles = articles
  },
  setCurrentarticle: (state, article) => {
    state.article = article
  },
  get_imageUrl(state, data) {
    state.article.image.url = data
  }
}

export { state, mutations }
