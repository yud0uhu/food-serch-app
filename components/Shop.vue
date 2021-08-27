<template>
  <v-main>
    <v-container>
      <div id="app">
        <!-- <div v-for="item in items" v-bind:key="item.key">
          <li>{{ item }}</li>
        </div> -->

        <div class="wasyoku">
          <h1 class="text-center mt-4" id="item-1">
            <div class="title-S">今週のおすすめ飲食店</div>
            <span class="badge badge-secondary">和食</span>
          </h1>

          <div class="card mb-3 mt-3 mx-auto" style="width: 43rem">
            <div v-for="item in items" v-bind:key="item.key">
              <img v-bind:src="item.画像url" class="card-img-top" alt="画像" />

              <div class="card-body">
                <p class="card-text"></p>
                <h3>{{ item.店名 }}</h3>
                <br />
                <h5>評価：{{ item.レビュー平均 }}</h5>
                <br />
                <div id="js-items" class="d-flex justify-content-center">
                  <div class="mr-3">
                    <a
                      class="btn btn-primary"
                      v-bind:href="item.店舗url"
                      role="button"
                      >店舗詳細</a
                    >
                  </div>
                  <div class="ml-3">
                    <a
                      class="btn btn-primary"
                      v-bind:href="item.トップレビュー"
                      role="button"
                      >口コミ</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    }
  },
  mounted() {
    axios
      .get(
        'https://script.google.com/macros/s/AKfycbzewD2zYbLFaoFIGRXjV87GPR8aEeBUEOY4kpEd7U2zluCIcGK44q7MyHeVQsPLHkYhUg/exec?foodType=和食'
      )
      .then((response) => (this.items = response.data))
  },
}
</script>
