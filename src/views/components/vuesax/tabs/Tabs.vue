<!-- =========================================================================================
    File Name: Tabs.vue
    Description: Tabs - Imports all page portions
    ----------------------------------------------------------------------------------------
    Item Name: Direksyon - CSMP
      Author: Robert Anthony Tribiana - Direksyon LLC
    Author URL: http://robtribiana.com
========================================================================================== -->


<template>
    <div id="tabs-demo">
        <tabs-default></tabs-default>
        <tabs-color></tabs-color>
        <tabs-alignments></tabs-alignments>
        <tabs-position></tabs-position>
        <tabs-icons></tabs-icons>
    </div>
</template>

<script>
import TabsDefault from './TabsDefault.vue'
import TabsColor from './TabsColor.vue'
import TabsAlignments from './TabsAlignments.vue'
import TabsPosition from './TabsPosition.vue'
import TabsIcons from './TabsIcons.vue'

export default{
  components: {
    TabsDefault,
    TabsColor,
    TabsAlignments,
    TabsPosition,
    TabsIcons
  }
}
</script>
