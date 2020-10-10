<template>
  <div class="home">
    <HundredThousand />
  </div>
</template>

<script>
// @ is an alias to /src
import HundredThousand from '@/components/HundredThousand.vue';

export default {
  name: 'Home',
  components: {
    HundredThousand,
  },
};
</script>
