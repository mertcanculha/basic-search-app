<script>
import mockData from "../../json/mockData.json";

export default {
  data() {
    return {
      myJson: mockData,
      search: "",
      showSort: false,
      showPagination: false,
      sortItems: [
        {
          label: "Name ascending",
        },
        {
          label: "Name descending",
        },
        {
          label: "Year asencing",
        },
        {
          label: "Year descending",
        },
      ],
    };
  },
  computed: {
    filteredData() {
      return this.myJson.data.filter((idx) =>
        this.myJson.data.length
          ? Object.keys(this.myJson.data).some((key) =>
              ("" + idx[key]).toLowerCase().includes(this.search)
            )
          : true
      );
    },
    methods: {
      sort() {
        return this.filteredData.sort((a, b) => a[0] - b[1]);
      },
    },
  },
  watch: {
    search() {
      if (this.search.length >= 2) {
        this.searchLeng = true;
        this.showSort = true;
        this.showPagination = true;
      } else {
        this.searchLeng = false;
        this.showSort = false;
        this.showPagination = false
      }
    },
  },
};
</script>

<template>
  <div>
    <router-link
      :to="{
        path: '/recordPage',
      }"
    >
      <button class="add-button">Add new record</button></router-link
    >
    <div class="container add-item">
      <router-link style="height: 90px" to="/"
        ><img src="../../assets/tesodev-logo.jpg" alt="logo"
      /></router-link>
      <div class="search-bar">
        <div style="padding-right: 30%">
          <input
            style="text-indent: 17px"
            :class="[data !== 0 ? 'search-input' : error > 0]"
            type="search"
            v-model="search"
          />

          <button
            style="
              background-color: rgba(41, 78, 152, 0.72);
              position: absolute;
            "
          >
            Search
          </button>
          <br /><br /><br />
          <div style="float: right" class="sort-dropdown">
            <span v-show="showSort" class="toggler"><i class="fas fa-sort"></i> Order By</span>
            <ul class="dropdown">
              <li
                class="dropdown-item"
                @click="sort(item.type)"
                v-for="(item, index) in sortItems"
                :key="index"
              >
                {{ item.label }}
              </li>
            </ul>
          </div>
          <br /><br />
          <div v-if="searchLeng">
            <h6 v-for="(filteredDatas, idx) in filteredData" :key="idx">
              <hr />
              <i
                style="font-size: 25px; margin-top: 25px; float: left"
                class="fas fa-map-marker-alt"
              ></i>
              <div class="results">
                <br />
                <p style="font-weight: 400; font-size: 16px">
                  {{ filteredDatas[4] }} <br />
                  {{ filteredDatas[5] }}
                </p>
              </div>
              <div class="resultss">
                {{ filteredDatas[0] }} <br />
                {{ filteredDatas[3] }}
              </div>
            </h6>
            <div v-show="showPagination" class="pagination">
              <button
                class="pagination-item"
                @click="handleClick(resultStore?.pagination?.prev)"
              >
                Previous
              </button>
              <button
                v-for="(filteredDatas, idx) in filteredData"
                :key="idx"
                @click="handleClick(idx + 1)"
                class="pagination-item"
              >
                {{ idx + 1 }}
              </button>

              <button
                class="pagination-item"
                @click="handleClick(resultStore?.pagination?.next)"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-item {
  display: flex;
  flex-direction: column;

  img {
    width: 255px;
    padding-top: 55px;
    padding-left: 25px;
  }

  header {
    margin: 15px 0 50px 0;
    display: flex;
    align-items: center;
  }
}

.sort-dropdown {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  gap: 10px;
  transition: opacity 300ms ease-in;
  max-width: 150px;

  &:hover .dropdown {
    display: block;
  }

  .toggler {
    background: #f3f2f2;
    border: 1px solid #414141;
    border-radius: 8px;
    padding: 3px 10px;
  }

  .dropdown {
    display: none;
    position: absolute;
    transform: translateY(30px);
    background: #ffffff;
    border: 1px solid #8f8f8f;
    box-shadow: 4px 6px 12px 4px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 10px;
    z-index: 9999;

    &-item {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 6px 10px;
      margin: 3px 0;
      border-radius: 8px;
    }

    .dropdown-item:hover,
    .active {
      background-color: #b3b3b3;
      color: #fff;
    }
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  gap: 0 10px;

  &-item {
    padding: 4px 6px;
    border: 1px solid #484848;
    border-radius: 4px;
  }
}
.results {
  padding-right: 75%;
  font-weight: 400;
  font-size: 16px;
  height: 15px;
}
.resultss {
  padding-left: 75%;
  font-weight: 400;
  font-size: 16px;
  height: 70px;
  font-weight: 400;
  font-size: 16px;
}
</style>
