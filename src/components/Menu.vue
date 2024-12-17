<script setup lang="ts">
import { navigateTo } from '@/services/navigate'
import { ref } from 'vue'

const popup = ref()

function openPopup() {
  popup.value.open('center')
}

function goto(url: NavigateToOptions['url'], data?: Record<string, any>) {
  navigateTo({
    url,
  }, data)
}
</script>

<template>
  <view class="grid cols-1 gap-2 w-full">
    <button class="w-full" @click="openPopup">
      Open Popup
    </button>

    <button class="w-full" type="primary" @click="goto('/pages/demo')">
      GO TO DEMO PAGE
    </button>
  </view>

  <view>
    <uni-popup ref="popup">
      <view class="popup-content">
        <text>Open Popup</text>
      </view>
    </uni-popup>
  </view>
</template>

<style scoped lang="scss">
.input-box {
  margin: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid gray;
}

.popup-content {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  height: 50px;
  background-color: #fff;
}
</style>
