<template>
  <div class="mt-10">
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Dashboard</div>
      <v-card-text>
        <p class="text-h6">Hello, {{ username }}!</p>
        <p>Welcome to your dashboard.</p>
      </v-card-text>
      <v-btn
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="logout"
      >
        Logout
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
    }
  },
  async created() {
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.get('/api/dashboard/', {
        headers: { Authorization: `Bearer ${token}` },
      })
      this.username = response.data.username
    } catch (error) {
      console.error('Dashboard fetch failed:', error)
      this.$router.push('/')
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('access_token')
      this.$router.push('/')
    },
  },
}
</script>