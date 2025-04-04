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
        @click="attemptLogout"
      >
        Logout
      </v-btn>
      <v-alert v-if="error" type="error" class="mt-4">
        {{ error }}
      </v-alert>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

// Reactive variables
const username = ref('');
const error = ref(null);
const router = useRouter();

// Fetch dashboard data on mount
onMounted(async () => {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/login');
      return;
    }
    const response = await axios.get('/api/dashboard/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    username.value = response.data.username;
  } catch (err) {
    console.error('Dashboard fetch failed:', err);
    if (err.response?.status === 401) {
      error.value = 'Session expired. Please log in again.';
      router.push('/login');
    } else if (err.code === 'ERR_NETWORK') {
      error.value = 'Unable to connect to the backend. Please try again later.';
    } else {
      error.value = 'An unknown error occurred. Please try again later.';
    }
  }
});

// Attempt logout function
const attemptLogout = async () => {
  error.value = null; // Reset error

  // Check if the backend is reachable first before logging out
  try {
    const response = await axios.get('/api/ping');  // A simple endpoint to check if backend is up
    if (response.status === 200) {
      logout();
    }
  } catch (err) {
    console.error('Backend check failed:', err);
    if (err.code === 'ERR_NETWORK') {
      error.value = 'Unable to connect to the backend. Please try again later.';
    } else {
      error.value = 'Backend is unavailable. Please try again later.';
    }
  }
};

// Logout function
const logout = async () => {
  try {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (!accessToken || !refreshToken) {
      throw new Error('No tokens found');
    }
    await axios.post(
      '/api/logout/',
      { refresh: refreshToken },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    // Clear tokens and redirect on success
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    router.push('/login');
  } catch (err) {
    console.error('Logout failed:', err);
    if (err.code === 'ERR_NETWORK') {
      error.value = 'Backend is unavailable. Please try again later.';
    } else if (err.response?.status === 401) {
      error.value = 'Session expired. Please log in again.';
      router.push('/login');
    } else {
      error.value = err.response?.data?.error || 'Logout failed. Please try again.';
    }
  }
};
</script>
