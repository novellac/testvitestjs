<template>
  <button @click="$emit('snooze:alarm')">Snooze the alarm</button>
</template>

<script setup>
defineEmits(['snooze:alarm'])
</script>