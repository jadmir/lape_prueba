<template>
  <div class="Libro ed-container">
    <div class="ed-item">
      <h3 style="text-align: center;">{{ $t('book.titulo') }}</h3>
      <h3 style="text-align: center;">{{ name }}</h3>
    </div>

    <form class="ed-item ed-container" style="justify-content: center;">
      <div class="form-group ed-item l-50">
        <label for="incidente">
          {{ $t('book.incidente') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="fecha_incidente"
          v-model="fechaIncidente"
          autocomplete="off"
          type="date"
          class="form-control"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="nombre_razon">
          {{ $t('book.nombre_razon') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="nombre_razon"
          v-model="nombreRazon"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('book.nombre_razon')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo1') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="solicitante">
          {{ $t('book.solicitante') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="solicitante"
          v-model="solicitante"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('book.solicitante')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="domicilio">
          {{ $t('book.domicilio') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="domicilio"
          v-model="domicilio"
          autocomplete="off"
          type="text"
          class="form-control"
          :placeholder="$t('book.domicilio')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="documento">
          {{ $t('book.documento') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="documento"
          v-model="documento"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.documento')"
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="correo">
          {{ $t('book.correo') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="correo"
          v-model="correo"
          autocomplete="off"
          type="email"
          class="form-control mt-10"
          :placeholder="$t('book.correo')"
        />
      </div>
      <div class="form-group ed-item">
        <label for="apoderado">
          {{ $t('book.apoderado') }}
        </label>
        <input
          id="apoderado"
          v-model="apoderado"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.apoderado_descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo2') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="tipo">
          {{ $t('book.tipo') }}
          <span style="color: red !important;">*</span>
        </label>
        <select v-model="tipo" class="form-control">
          <optgroup :label="$t('book.selec')">
            <option>Producto</option>
            <option>Servicio</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group ed-item l-50">
        <label for="monto">
          {{ $t('book.monto') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="monto"
          v-model="monto"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.monto')"
        />
      </div>
      <div class="form-group ed-item">
        <label for="descripcion">
          {{ $t('book.descripcion') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="descripcion"
          v-model="descripcion"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo3') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="reclamo_queja">
          {{ $t('book.reclamo_queja') }}
          <span style="color: red !important;">*</span>
        </label>
        <select v-model="reclamoQueja" class="form-control">
          <optgroup :label="$t('book.reclamo_queja')">
            <option>Queja</option>
            <option>Reclamo</option>
          </optgroup>
        </select>
      </div>
      <div class="form-group ed-item l-50">
        <label for="detalle">
          {{ $t('book.detalle') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="detalle"
          v-model="detalle"
          autocomplete="off"
          type="string"
          class="form-control mt-10"
          :placeholder="$t('book.detalle_descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <label for="pedido">
          {{ $t('book.pedido') }}
          <span style="color: red !important;">*</span>
        </label>
        <input
          id="pedido"
          v-model="pedido"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.pedido_descripcion')"
        />
      </div>
      <div class="form-group ed-item">
        <p class="text-left font-weight-bold">{{ $t('book.subtitulo4') }}</p>
      </div>
      <div class="form-group ed-item l-50">
        <label for="fecha_respuesta">
          {{ $t('book.fecha_respuesta') }}
        </label>
        <input
          id="fecha_respuesta"
          v-model="fechaRespuesta"
          autocomplete="off"
          type="date"
          class="form-control"
          readonly
        />
      </div>
      <div class="form-group ed-item l-50">
        <label for="observaciones">
          {{ $t('book.observaciones') }}
        </label>
        <input
          id="observaciones"
          v-model="observaciones"
          autocomplete="off"
          type="text"
          class="form-control mt-10"
          :placeholder="$t('book.observaciones')"
          readonly
        />
      </div>
      <div class="ed-item text-center">
        <button type="button" class="btn btn-primary" @click="addLibro">
          {{ $t('book.add') }}
        </button>
      </div>
      <div class="ed-item">
        <p style="color: red; font-size: 0.8em;">* {{ $t('book.campos') }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert2'

export default {
  name: 'Libro',

  data() {
    return {
      fechaIncidente: '',
      nombreRazon: '',
      solicitante: '',
      domicilio: '',
      documento: '',
      correo: '',
      apoderado: '',
      tipo: '',
      monto: '',
      descripcion: '',
      reclamoQueja: '',
      detalle: '',
      pedido: '',
      fechaRespuesta: '',
      observaciones:
        'Nos comunicaremos con usted durante la fecha establecida.',
    }
  },
  computed: {
    name() {
      return this.$route.query.name || 'No se recibió nombre'
    },
  },
  mounted() {
    this.fechaRespuesta = this.calcularFechaRespuesta() // Asigna la fecha al cargar el componente
  },
  methods: {
    validarCampos() {
      if (
        !this.fechaIncidente ||
        !this.nombreRazon ||
        !this.solicitante ||
        !this.domicilio ||
        !this.documento ||
        !this.correo ||
        !this.tipo ||
        !this.monto ||
        !this.descripcion ||
        !this.reclamoQueja ||
        !this.detalle ||
        !this.pedido
      ) {
        // Mostrar alerta si algún campo está vacío
        swal.fire(
          'Campos vacíos',
          'Todos los campos con * son obligatorios',
          'error'
        )
        return false // No enviar el formulario
      }
      return true // Todos los campos están llenos, se puede continuar
    },
    calcularFechaRespuesta() {
      const fechaActual = new Date()
      fechaActual.setDate(fechaActual.getDate() + 30)
      const opciones = { year: 'numeric', month: '2-digit', day: '2-digit' }
      const fechaFormateada = fechaActual.toLocaleDateString('en-CA', opciones)
      return fechaFormateada // El formato ya es 'aaaa-mm-dd' necesario para el input de tipo date
    },
    addLibro() {
      // Validar campos antes de enviar el formulario
      if (!this.validarCampos()) {
        return // Detener si hay campos vacíos
      }

      // asignar la fecha de la respuesta automatica
      this.fechaRespuesta = this.calcularFechaRespuesta()
      // Crear el objeto de datos del correo
      const correoData = {
        from: {
          email: 'MS_D2SEuM@trial-3yxj6ljprk1ldo2r.mlsender.net',
        },
        to: [
          {
            email: 'jadmir1111@gmail.com',
          },
        ],
        subject: `Asunto: ${this.detalle}`,
        text: 'detealles',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 0; border-radius: 10px; background-color: #f9f9f9;">
  <!-- Encabezado -->
  <div style="background-color: #3366cc; padding: 15px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0;">Detalles del Libro de Reclamaciones</h1>
  </div>

  <!-- Cuerpo del correo -->
  <div style="padding: 20px;">
    <h2 style="color: #3366cc; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-top: 0;">Información General</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold; width: 50%;">Fecha del incidente:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.fechaIncidente}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Nombre y razón:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.nombreRazon}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Solicitante:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.solicitante}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Domicilio:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.domicilio}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Documento:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.documento}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Correo:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.correo}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Apoderado:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.apoderado}</td>
      </tr>
    </table>

    <h2 style="color: #3366cc; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-top: 0;">Detalles del Reclamo/Queja</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Tipo:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.tipo}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Monto:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.monto}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Descripción:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.descripcion}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Reclamo/Queja:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.reclamoQueja}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Detalle:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.detalle}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Pedido:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.pedido}</td>
      </tr>
    </table>

    <h2 style="color: #3366cc; border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-top: 0;">Información Adicional</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Fecha de respuesta:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.fechaRespuesta}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 10px; font-weight: bold;">Observaciones:</td>
        <td style="border: 1px solid #ddd; padding: 10px;">${this.observaciones}</td>
      </tr>
    </table>
  </div>

  <!-- Pie de página -->
  <div style="background-color: #f1f1f1; padding: 15px; text-align: center; border-radius: 0 0 10px 10px;">
    <p style="font-size: 0.9em; color: #777;">Este correo ha sido generado automáticamente. Por favor, no responda.</p>
  </div>
</div>
            `,
      }
      const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization:
          'Bearer mlsn.d816d34b51fb98b9b6445d754dce5d8ba97b197440ae808d60ab7962e799dbc6',
      }

      const proxyUrl = 'https://cors-anywhere.herokuapp.com/' // Proxy CORS
      const targetUrl = 'https://api.mailersend.com/v1/email'

      this.$axios
        .post(proxyUrl + targetUrl, correoData, { headers })
        .then((response) => {
          swal.fire(
            `${this.$route.query.name}`,
            'El libro de Reclamaciones fue enviado correctamente',
            'success'
          )
          // Limpiar todos los campos del formulario
          this.fechaIncidente = ''
          this.nombreRazon = ''
          this.solicitante = ''
          this.domicilio = ''
          this.documento = ''
          this.correo = ''
          this.apoderado = ''
          this.tipo = ''
          this.monto = ''
          this.descripcion = ''
          this.reclamoQueja = ''
          this.detalle = ''
          this.pedido = ''
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            swal.fire(
              `${this.$route.query.name}`,
              'Hubo un error al enviar el Libro de Reclamaciones',
              'error'
            )
          } else {
            swal.fire(
              `${this.$route.query.name}`,
              'Hubo un error al enviar el Libro de Reclamaciones',
              'error'
            )
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.Libro {
  // position: relative;
  // height: 100vh;
  // top: 85px;
  transform: translateY(100px);
  // min-height: 50vh;
}

optgroup[label] {
  background: #2c3f84;
  color: white;
}

option {
  background: white;
  color: black;
}
</style>
