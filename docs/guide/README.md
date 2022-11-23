# 指南

### 分类

### 目录

<ClientOnly>
  <mindmap v-model="data" zoom/>
</ClientOnly>

<script setup>
import { inject } from 'vue'

const data = [{
  name: 'BLOG',
  children: inject('zhMenu')
}]

</script>
