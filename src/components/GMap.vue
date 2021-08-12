<template>
  <div>
    <div>
      <h2>Ache o posto mais próximo com sua vacina</h2>
      <GMapAutocomplete :placeholder="placeholder" @place_changed="setPlace" />
    </div>
    <GMapMap :center="center" :zoom="12">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
      />
    </GMapMap>
  </div>
</template>

<script>
export default {
  name: "GMap",
  data() {
    return {
      center: { lat: -23.550305, lng: -46.6363896 },
      currentPlace: null,
      placeholder: "Entre seu endereço",
      markers: [],
    };
  },
  mounted() {
    this.geolocate();
    this.fetchData();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
      this.addMarker(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      );
    },
    addMarker(lat, lng) {
      if (lat && lng) {
        const marker = {
          lat: lat,
          lng: lng,
        };
        this.markers.push({ position: marker });
        this.center = marker;
      }
    },
    geolocate() {
      if (navigator.geolocation) {
        var that = this;
        var fail = function () {
          console.log("Failed to geo-loc");
          that.placeholder = "no geo";
        };
        var locationTimeout = setTimeout("fail()", 10000);

        navigator.geolocation.getCurrentPosition(
          function (position) {
            clearTimeout(locationTimeout);

            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            this.center = { lat: lat, lng: lng };
          },
          function () {
            clearTimeout(locationTimeout);
            fail();
          }
        );
      } else {
        fail();
      }
    },
    fetchData() {
      // TODO: Fetch data from my backend
      //   return fetch("https://onde2dose.hugocorbucci.com/dados", {
      //     headers: {
      //       Accept: "application/json",
      //     },
      //   })
      //     .then((res) => {
      //       // a non-200 response code
      //       if (!res.ok) {
      //         // create error instance with HTTP status text
      //         const error = new Error(res.statusText);
      //         error.json = res.json();
      //         throw error;
      //       }

      //       return res.json();
      //     })
      //     .then((json) => {
      //       // set the response data
      //       this.data.value = json.data;
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     })
      //     .then(() => {
      //       // disable loading
      //     });
      this.postos = [
        {
          equipamento: "GRCS ESCOLA DE SAMBA VAI-VAI",
          endereco: "Rua S\u00e3o Vicente, n\u00ba 276 - Bela Vista",
          tipo_posto: "POSTO VOLANTE",
          id_tipo_posto: "4",
          id_distrito: "1",
          distrito: "Bela Vista",
          id_crs: "1",
          crs: "CENTRO",
          data_hora: "2021-08-11 07:50:49.173",
          indice_fila: "5",
          status_fila: "N\u00c3O FUNCIONANDO",
          coronavac: "0",
          astrazeneca: "0",
          pfizer: "0",
          id_tb_unidades: "1571",
        },
        {
          equipamento: "UBS HUMAIT\u00c1 - DR. JO\u00c3O DE AZEVEDO LAGE",
          endereco:
            "R. HUMAIT\u00c1, 520 - BELA VISTA - CEP: 01321-010 - Tel: 3241- 1632/ 3241-1163",
          tipo_posto: "POSTO FIXO",
          id_tipo_posto: "1",
          id_distrito: "1",
          distrito: "Bela Vista",
          id_crs: "1",
          crs: "CENTRO",
          data_hora: "2021-08-11 11:50:27.413",
          indice_fila: "1",
          status_fila: "SEM FILA",
          coronavac: "1",
          astrazeneca: "1",
          pfizer: "1",
          id_tb_unidades: "1",
        },
      ];
      // TODO: generate marker for each posto
    },
  },
};
</script>

<style scoped>
.vue-map-container {
  width: 100%;
  height: 400px;
}
h2 {
  margin: 1rem;
}
@media only screen and (min-height: 600px) {
  .vue-map-container {
    height: 450px;
  }
}
@media only screen and (min-height: 600px) and (-webkit-min-device-pixel-ratio: 2) {
  .vue-map-container {
    height: 350px;
  }
}
@media only screen and (min-height: 600px) and (-webkit-min-device-pixel-ratio: 3) {
  .vue-map-container {
    height: 250px;
  }
}
@media only screen and (min-height: 700px) {
  .vue-map-container {
    height: 550px;
  }
}
@media only screen and (min-height: 700px) and (-webkit-min-device-pixel-ratio: 2) {
  .vue-map-container {
    height: 450px;
  }
}
@media only screen and (min-height: 700px) and (-webkit-min-device-pixel-ratio: 3) {
  .vue-map-container {
    height: 350px;
  }
}
@media only screen and (min-height: 800px) {
  .vue-map-container {
    height: 650px;
  }
}
@media only screen and (min-height: 800px) and (-webkit-min-device-pixel-ratio: 2) {
  .vue-map-container {
    height: 550px;
  }
}
@media only screen and (min-height: 800px) and (-webkit-min-device-pixel-ratio: 3) {
  .vue-map-container {
    height: 450px;
  }
}
@media only screen and (min-height: 900px) {
  .vue-map-container {
    height: 750px;
  }
}
@media only screen and (min-height: 900px) and (-webkit-min-device-pixel-ratio: 2) {
  .vue-map-container {
    height: 650px;
  }
}
@media only screen and (min-height: 900px) and (-webkit-min-device-pixel-ratio: 3) {
  .vue-map-container {
    height: 550px;
  }
}
</style>
