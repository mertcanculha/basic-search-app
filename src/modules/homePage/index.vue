<script>
import mockData from "../../json/mockData.json";
import searchBar from "../../components/searchBar.vue";
import Footer from "../../components/footer.vue";

export default {
  components: {
    searchBar,
    Footer,
  },
  data() {
    return {
      myJson: mockData,
      indexSlide: 1,
    };
  },
  created() {
    document.body.style.zoom = "90%";
  },
  mounted() {
    this.showSlides();
  },
  methods: {
    goToRecordPage() {
      this.$router.push("/recordPage");
    },
    plusSlide(n) {
      this.showSlides((this.indexSlide += n));
    },
    showSlides(n) {
      console.log(n);
    },
  },
};
</script>

<template>
  <div>
    <button class="add-button" @click="goToRecordPage">Add new record</button>
    <router-link
      :to="{
        path: '/recordPage',
      }"
    ></router-link>
    <br /><br />
    <div class="header">
      <header />
      <img
        alt="Vue logo"
        width="278"
        height="115"
        style="padding-left: 10px"
        src="../../assets/tesodev-logo.jpg"
      />
      <br /><br />
      <p style="font-weight: 700; padding-left: 40%">Search app</p>
      <br />
      <h3 class="title">Find in records</h3>
      <br />
      <search-bar class="search-bar" /> <br /><br />
    </div>

    <br />
    <div class="slideshow-container">
      <div class="row">
        <h3 class="title2">Top News</h3>
        <br />
        <br />
        <div class="column">
          <img src="../../assets/footer2.png" style="width: 100%" /> <br />
          <p>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
          <p class="newsLabel">1h ago · by Troy Corlson</p>
        </div>
        <div class="column">
          <img src="../../assets/footer2.png" style="width: 100%" />
          <p>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
          <p class="newsLabel">1h ago · by Troy Corlson</p>
        </div>
        <div class="column">
          <img src="../../assets/footer2.png" style="width: 100%" />
          <p>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</p>
          <p class="newsLabel">1h ago · by Troy Corlson</p>
        </div>
      </div>

      <a class="prev" @click="plusSlide(-1)">❮</a>
      <a class="next" @click="plusSlide(1)">❯</a>
    </div>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@import "../../App.css";
</style>
