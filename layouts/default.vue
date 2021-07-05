<template>
  <div class="layout">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
export default {
  layout: 'defalut',
  components: {
    Header,
  },
}
</script>
