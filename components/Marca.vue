<template>
  <div class="ed-item s-50 l-30 to-center Marca">
    <figure>
      <div>
        <img :src="img" width="120" height="32" :alt="alt" />
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'Marca',

  props: {
    img: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.Marca {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 80px;

  figure {
    margin: 0;

    div {
      text-align: center;
    }
  }
}
</style>
