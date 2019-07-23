<template>
  <div id='NotFound'>
    <div class='icon-t'>
      <font-awesome-icon :icon="['fas','exclamation-triangle']" />
    </div>
    <h1 class='t1'>{{ $t("notfound") }}</h1>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style>
.t1 {
  position: absolute;
  top: 40%;
  font-size: 32px;
  width: 100%;
  text-align: center;
}
.icon-t {
  width: 100%;
  position: absolute;
  top: 20%;
  font-size: 100px;
  text-align: center;
}
</style>