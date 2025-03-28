<template>
  <div class="container">
    <div class="btn">
      <span class="number">{{ number }}</span>
      <span class="service">{{ service }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  service: String, 
  number: Number,
})
</script>

<style lang="scss" scoped>
.btn{
  width: 109px;
  height: 73px;
  background-color:  rgba(224, 36, 36, 0.35);;
  border-radius: 15px;
  margin: 8px;
  margin-top: 20px;
  box-shadow: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center

}

.service{
  color: white;
  font-size: 14px;
  font-weight: bold;
  line-height: 15px;
}

.number{
  color: #680C14;
  font-size: 18px;
  font-weight: bold;
  
}
</style>