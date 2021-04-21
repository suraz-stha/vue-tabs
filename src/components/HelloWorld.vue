<template>
<div id="app">
  <div class="d-flex flex-wrap align-items-center">
    <b-tabs card>
      <b-tab title="Trends" active>
        <b-card-text><trends></trends></b-card-text>
      </b-tab>
      <b-tab title="Recurring Revenue">
        <b-card-text><recurringRevenue> </recurringRevenue></b-card-text>
      </b-tab>
          <b-tab title="Recurring Revenue">
        <b-card-text><opportunity> </opportunity></b-card-text>
      </b-tab>
          <b-tab title="Recurring Revenue">
        <b-card-text><drivers> </drivers></b-card-text>
      </b-tab>
    </b-tabs>
    
  </div>
</div>

</template>

<script>
import Trends from "./Trends"
import RecurringRevenue from "./RecurringRevenue"
import Opportunity from "./Opportunity"
import Drivers from "./Drivers"


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Trends,
    RecurringRevenue,
    Opportunity,
    Drivers

  }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

#id{
  padding: 20px;
  margin: 10px;
}

.page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-center, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
