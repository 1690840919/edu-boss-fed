<template>
  <div class="loginPage">
    {{ name }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { getLoginInfo } from '@/api/common'
export default Vue.extend({
  data() {
    return {
      name: '登陆页面',
      userInfo: {
        name: 'beitu'
      }
    }
  },
  mounted() {
    getLoginInfo().then(data => {
      console.log(data)
    })
  }
})
</script>

<style lang="scss">
</style>
