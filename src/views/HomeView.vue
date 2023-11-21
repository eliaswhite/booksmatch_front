<script setup>
import { computed } from 'vue';
import Header from '../components/Header.vue';

import { useBookStore } from '../stores/book';

const bookStore = useBookStore()

const books = computed(()=> bookStore.books)
</script>

<template>
  <Header/>
  <main>
    <div v-for="book in books">
      {{ book.titulo }}
    </div>
  </main>
</template>
