<template>
  <a :href="linkPolitica" target="_blank" class="Button">
    {{ $t('links.politicas') }}
  </a>
</template>

<script>
export default {
  name: 'PoliticasButton',

  computed: {
    linkPolitica() {
      if (this.$i18n.locale === 'es') {
        return '/politica_es.pdf'
      } else {
        return '/politica_en.pdf'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.Button {
  display: block;
  background: none;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  border-width: 1px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-family: Roboto;
  font-size: 20px;
  line-height: 17px;
  padding: 12px 35px;
  transition: all 0.8s;
  margin: 5px auto;
  text-decoration: none;
  height: 70px;
  width: 270px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 700ms;

  &:hover {
    background-color: #fff;
    color: rgb(46, 63, 133);
    border-color: #fff;
  }
}
</style>
