<template>
  <article class="media box">
    <div class="media-content">
      <div class="content">
        <p>
          <a :href="link"><strong>{{ title }}</strong></a>
          <br>
          Submitted by <a :href="`https://news.ycombinator.com/user?id=${user}`">{{user}}</a> {{ timeAgo }} | <a
          :href="comment_link">{{ comment_count }} comments</a>
        </p>
      </div>
    </div>
  </article>
</template>
<style lang="stylus">
  .score {
    font-weight bold
    background-color #fedf0e
    padding 5px
    border-radius 10px
  }

  .score-box {
    padding-top 10px
  }
</style>
<script>
import { Flags } from '../utils/flag'

export default {
  props: {
    title: String,
    user: String,
    link: String,
    comment_link: String,
    score: Number,
    comment_count: Number,
    time: Number
  },
  data () {
    return {
      show_score: Flags.score.isEnabled()
    }
  },
  computed: {
    timeAgo () {
      if (!this.time) {
        return 'unknown time'
      }
      const seconds = Math.floor(Date.now() / 1000) - this.time
      const intervals = [
        ['year', 31536000],
        ['month', 2592000],
        ['day', 86400],
        ['hour', 3600],
        ['minute', 60]
      ]
      for (const [name, secs] of intervals) {
        const count = Math.floor(seconds / secs)
        if (count >= 1) {
          return `${count} ${name}${count > 1 ? 's' : ''} ago`
        }
      }
      return 'just now'
    }
  }
}
</script>
