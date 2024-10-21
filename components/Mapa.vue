<template>
  <div class="Mapa ed-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.854432754915!2d-77.048545!3d-12.053535!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8da6ff42659%3A0xab016a991d924725!2sYavari+378%2C+Cercado+de+Lima+15082%2C+Per%C3%BA!5e0!3m2!1ses-419!2sus!4v1564948678163!5m2!1ses-419!2sus"
      width="600"
      height="450"
      frameborder="0"
      style="border: 0;"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'Mapa',
}
</script>

<style lang="scss" scoped>
.Mapa {
  iframe {
    width: 100%;
  }
}
</style>
