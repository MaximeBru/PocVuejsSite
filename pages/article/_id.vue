<template>
  <section class="section">
    <div>
      <section class="InterwiewHeader">
        <div id="hero">
          <div
            :style="{
              'background-image':
                'url(http://localhost:1337' + article.articleImg.url + ')'
            }"
            class="hero-holder">
            <div class="hero-footer">
              <h6>
                {{ $moment(article.created_at).format('DD') }}
                {{ $moment(article.created_at).format('MMMM') }}
              </h6>
              <h1>{{ article.Titre }}</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="InterwiewContent">
        <p>{{ article.contenu }}</p>
      </section>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import VueMoment from 'vue-moment'
import * as moment from 'moment'

export default {
  components: {},
  asyncData({ params }, callback) {
    axios
      .get(`http://localhost:1337/articles/${params.id}`)
      .then((res) => {
        callback(null, { article: res.data })
      })
      .catch((e) => {
        callback({ statusCode: 404, message: 'Post not found' })
      })
  },
  computed: {
    ...mapState({
      article: (state) => state.article,
      id: (state) => state.id,
      imageUrl: (state) => state.article.articleImg.Url
    })
  },

  head() {
    return {
      title: this.article.Titre,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.contenu.slice(0, 90)
        }
        // content: '' + this.article.metaDescription + ''
      ]
    }
  }
}
</script>
<style scoped>
p {
  font-size: 2rem;
  font-family: roboto;
}
.InterwiewColor {
  background-color: #f5f4f0;
}
.InterwiewHeader {
  background-color: #f5f4f0;
}
#hero {
  position: relative;
  width: 100%;
  transition: all 200ms ease-out;
  -webkit-transition: all 200ms ease-out;
  min-height: 300px;
  height: 62rem;
}
#hero figure {
}
.hero-holder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 80px;
  background: #2b2b2b;
  /*background-image: url("../images/model-429733_1920.jpg");*/
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisÃ©e */
  background-position: center;
}
.fig {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.hero-footer {
  display: block;
  margin: 0 auto;
  max-width: 1210px;
  bottom: 0;
  height: 200px;
  min-width: inherit;
}
.hero-footer h1 {
  font-family: 'Segoe UI Light', 'Segoe', 'Segoe UI', 'Helvetica Neue',
    sans-serif;
  bottom: -43px;
  background: #f5f4f0;
  font-weight: 100;
  font-size: 62px;
  padding: 0 30px;
  letter-spacing: 2px;
  position: absolute;
  text-transform: uppercase;
  margin-left: 20px;
  color: #d83431;
}
.hero-footer h6 {
  bottom: 0;
  padding: 13px 20px;
  height: 76px;
  background: #1d1d1d;
  color: #868375;
  text-transform: uppercase;
  font-size: 1.2em;
  font-weight: normal;
  letter-spacing: 3px;
  display: inline-block;
  margin-left: 1px;
  margin-top: 38.4%;
  position: absolute;
}
/*end of header*/
/*main*/
.InterwiewContent {
  background-color: #f5f4f0;
  padding: 0 16rem;
  font-size: 1.2em;
  line-height: 1.8em;
  margin-top: 0;
  font-family: 'ff-meta-serif-web-pro', serif;
  margin-bottom: 3rem;
}
.Tiltlequote {
  font-size: 2.9em;
  text-align: left;
  padding-left: 0px;
  font-family: 'Segoe UI Light', Segoe, 'Segoe UI', 'Helvetica Neue', sans-serif;
  line-height: 1.3em;
  quotes: '“' '”';
  display: table-cell;
  vertical-align: middle;
  position: relative;
  margin: 30px 0px 50px;
  color: black;
  /* padding-bottom: 40px;*/
  top: -3.1rem;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 40px;
  -webkit-margin-end: 40px;
}
.niceBorder {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 5px 0;
}
.Internquote {
  padding-left: 0px;
  font-family: 'Segoe UI Light', Segoe, 'Segoe UI', 'Helvetica Neue', sans-serif;
  line-height: 1.3em;
  quotes: '“' '”' '‘' '’';
  background-color: #f5f4f0;
  padding: 0 34rem;
  font-size: 4.5rem;
  color: #d83431;
  text-align: center;
}
.Quoteup {
  margin-left: -81rem;
  color: grey;
}
.Quotedown {
  margin-left: 79rem;
  color: grey;
}
.broderSpacing {
  margin-bottom: 3rem;
}
.interwiewImgFull {
  /*   background-image: url('../images/home-banner.jpg'); */
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisÃ©e */
  background-position: center;
  height: 50rem;
  margin-bottom: 3rem;
}
.interwiewImg {
  padding: 0 16rem;
  margin-bottom: 3rem;
  height: 40rem;
}
.interwiewImgcenter {
  -webkit-background-size: cover; /* pour anciens Chrome et Safari */
  background-size: cover; /* version standardisÃ©e */
  background-position: center;
  width: 100%;
  height: 100%;
}
.interwiewImg img {
  width: 118rem;
}
.InterwiewContent img {
  width: 66rem;
  float: right;
  padding: 2rem;
}
.InterwiewContent cite {
  font-size: 1.5rem;
}
/* transition page  */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.8s;
}
.bounce-leave-active {
  animation: bounce-out 0.5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}
/* responsive element */
.responsiveTitle {
  display: none;
}
</style>
