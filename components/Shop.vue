<template>
  <v-main>
    <v-container>
      <div id="app">
        <div v-show="loading" class="justify-center">
          <v-progress-circular
            :size="50"
            color="primary"
            indeterminate
          ></v-progress-circular>
          <p>loading...</p>
        </div>

        <v-row no-gutters>
          <v-col
            v-for="item in items"
            :key="item.key"
            cols="12"
            sm="3"
            md="4"
            lg="3"
          >
            <div class="card" elevation="1">
              <figure>
                <img width="100%" height="170" :src="item.画像url" />
              </figure>
              <h3>{{ item.店名 }}</h3>
              <p>評価：{{ item.レビュー平均 }}</p>
              <a style="color: blue" :href="item.店舗url" role="button"
                >店舗詳細</a
              >
              <a style="color: blue" :href="item.トップレビュー" role="button"
                >口コミ</a
              >
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>
<script>
import axios from 'axios'
export default {
  el: '#app',
  data() {
    return {
      items: [],
      loading: true,
    }
  },
  mounted() {
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbzewD2zYbLFaoFIGRXjV87GPR8aEeBUEOY4kpEd7U2zluCIcGK44q7MyHeVQsPLHkYhUg/exec?foodType=和食'
      )
      .then((response) => {
        this.items = response.data
        this.loading = false
      })
  },
}
</script>
