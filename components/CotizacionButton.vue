<template>
  <button class="Button" @click="goCotizacion">
    {{ $t('home.cot_button') }}
  </button>
</template>

<script>
export default {
  name: 'CotizacionButton',

  methods: {
    goCotizacion() {
      if (this.$i18n.locale === 'es') {
        this.$router.push('/cotizacion')
      }
      if (this.$i18n.locale === 'en') {
        this.$router.push('/en/cotizacion')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.Button {
  background-color: rgb(46, 63, 133);
  border: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: Roboto;
  font-size: 17px;
  padding: 12px 35px;
  transition: all 0.8s;
  margin: 5px auto;
  height: 50px;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    background-color: rgb(31, 47, 96);
    transform: translateY(-5px);
  }
  @media screen and (min-width: 640px) {
    text-align: right;
  }
}
</style>
