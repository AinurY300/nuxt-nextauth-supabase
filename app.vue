<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth()
</script>

<template>
  <button v-if="status === 'unauthenticated'" @click="signIn()">Войти</button>
  <button v-else-if="status === 'authenticated'" @click="signOut()">Выйти</button>

  <div v-if="status === 'authenticated'">
    {{ data }}
  </div>
</template>
