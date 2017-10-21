<template>
  <v-app light>

    <v-toolbar fixed app :clipped-left="clipped" class="indigo darken-4" dark  v-if="showToolBar()">

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
       <v-toolbar-items>
          <v-btn flat @click="logout()">Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <main>
      <v-content>
              <router-view></router-view>
      </v-content>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue ERP'
    }
  },
  methods : {
    showToolBar : function () {
      return this.$route.name !== 'Login';
    },
    logout () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>

