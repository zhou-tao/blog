# Guide

### Article Sort

### Mind Mapping

<mindmap v-model="menuData" zoom style="margin-top: 24px; height: 700px"></mindmap>

<script setup>
import mindmap from 'vue3-mindmap'
import 'vue3-mindmap/dist/style.css'

import { sidebar } from '../../../../configs'

function convertData (arr) {
  return arr.map(({ text, children, ...rest }) => ({
    name: text,
    children: children ? convertData(children) : children,
    ...rest
  }))
}

const menuData = [{
  name: 'BLOG',
  children: convertData(sidebar.zh)
}]

</script>