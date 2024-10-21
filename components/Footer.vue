<template>
  <div class="Footer" style="">
    <div class="Footer--Content">
      Copyright LAPE – MEDICAL DEVICE MANUFACTURING AND DISTRIBUTION LABORATORY
      – All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
.Footer {
  background: #000000;
  color: #999;
  font-size: 0.7em;
  font-family: 'Open Sans', sans-serif;

  @media screen and (max-width: 800px) {
    padding: 30px 0;
  }

  &--Content {
    padding: 20px 0;
    margin: auto 5em;
  }
}
</style>
