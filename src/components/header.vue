<template>
  <header class="header">
    <router-link to="/add" class="btn">Add new record</router-link>
  </header>
</template>

<style lang="scss">
.header {
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 120px;

    .btn {
      padding-left: 120px;
      border-radius: 12px;
    }
  }
}
</style>
