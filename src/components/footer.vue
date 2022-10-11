<script>
export default {
  components: {},
  data() {
    return {
      center: { lat: 41.0191353, lng: 28.8909481 },
      markers: [],
      places: [],
      currentPlace: null,
      slideIndex: 1,
    };
  },

  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<template>
  <footer>
    <div
      style="background-color: rgba(41, 78, 152, 0.72)"
      class="footer-container container"
    >
      <div class="contact">
        <img src="../assets/footer.png" alt="footer-img" />
        <div class="contact-text">
          <strong class="contact-text-title">İletişim</strong>
          <p style="font-weight: 400" class="contact-text-container">
            Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2 Blok
            No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul <br />
            <br />
            Email:bilgi@tesodev.com
          </p>
        </div>
      </div>
      <gmap-map
        :center="center"
        :zoom="12"
        style="margin-right: 15%; width: 30%; height: 80%; margin-top: 1%"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center = m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: rgba(41, 78, 152, 0.72);

  .footer-container {
    display: flex;

    justify-content: space-between;
    width: 100%;
    position: fixed;
    height: 22%;
    bottom: 0;
    left: 0;

    .contact {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      color: #ffffff;
      align-items: center;
      gap: 55px;

      img {
        max-width: 217.42px;
        max-height: 179.5px;
        margin-left: 250px;
      }

      &-text {
        display: flex;
        flex-direction: column;
        line-height: 21.09px;
        max-width: 420px;
      }
    }
  }
}
</style>
