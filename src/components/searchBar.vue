<script>
import mockData from "../json/mockData.json";
export default {
  data() {
    return {
      search: "",
      myJson: mockData,
      searchLeng: false,
    };
  },
  watch: {
    search() {
      if (this.search.length >= 2) {
        this.searchLeng = true;
      } else {
        this.searchLeng = false;
      }
    },
    filteredData() {
      this.filteredData.length = Math.min(this.filteredData.length, 5);
    },
  },
  computed: {
    filteredData() {
      return this.myJson.data.filter((idx) =>
        this.myJson.data.length
          ? Object.keys(this.myJson.data[0]).some((key) =>
              ("" + idx[key]).toLowerCase().includes(this.search)
            )
          : true
      );
    },
  },
};
</script>

<template>
  <div class="search-bar">
    <div class="input-icons">
      <i class="fa fa-search icon"> </i>
      <input
        style="text-indent: 17px"
        class="input-field"
        :class="[search !== 0 ? 'search-input' : error > 0]"
        type="text"
        v-model="search"
      />
      <router-link to="/Results"
        ><button class="searchButton">Search</button>
      </router-link>
    </div>
    <div v-if="searchLeng" class="asd123">
      <h6 v-for="(filteredDatas, idx) in filteredData.splice(2)" :key="idx">
        <i
          style="font-size: 25px; margin-top: 25px; float: left"
          class="fas fa-map-marker-alt"
        ></i>
        <div style="padding-right: 65%; font-size: 16px; height: 15px">
          <br />
          <p>{{ filteredDatas[4] }} <br /></p>
          <p style="color: #72777a">
            {{ filteredDatas[5] }}
          </p>
        </div>
      </h6>
      <div class="search-actions">
        <br />
        <router-link
          :to="{
            path: '/results',
          }"
          style="color: #090a0a"
          >Show more...</router-link
        >
      </div>
    </div>
  </div>
</template>

<style>
@import "../App.css";
.icon {
  padding: 15px;
  min-width: 50px;
  text-align: center;
}
.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
}
.searchButton {
  position: absolute;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
}
</style>
