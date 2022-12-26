# Guide

### Classification
<ClientOnly>
  <bubble-chart locale="en" />
</ClientOnly>


### Directory

<ClientOnly>
  <mindmap v-model="data" zoom/>
</ClientOnly>

<script setup>
import { inject } from 'vue'

const data = [{
  name: 'BLOG',
  children: inject('enMenu')
}]

</script>