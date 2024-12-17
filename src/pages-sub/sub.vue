<script setup lang="ts">
import { goto } from '@/services/navigate'
</script>

<template>
  <view class="px-10 py-20 text-center">
    <text>Sub Page</text>
    <button @click="goto('/pages/index')">
      Go to Index
    </button>
  </view>
</template>
