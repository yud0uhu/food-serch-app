<template>
  <div class="layout">
    <Header />
    <Shop />
    <!-- <Top /> -->
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
// import Top from '@/components/Top.vue'
import Shop from '@/components/Shop.vue'
export default {
  components: {
    Header,
    // Top,
    Shop,
  },
  layout: 'defalut',
}
</script>
