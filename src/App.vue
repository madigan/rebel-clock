<script setup>
import { onMounted } from "vue";
import assert from "./utils/assert";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
assert(CLIENT_ID, "VITE_GOOGLE_CLIENT_ID not provided.");

function handleCredentialResponse(...args) {
  console.log("RESPONSE RESPONSED", args)
}

onMounted(() => {
  window.handleCredentialResponse = handleCredentialResponse;
});
</script>

<template>
  <div id="g_id_onload"
     :data-client_id="CLIENT_ID"
     data-context="signin"
     data-ux_mode="popup"
     data-callback="handleCredentialResponse"
     data-itp_support="true">
</div>

<div class="g_id_signin"
     data-type="standard"
     data-shape="rectangular"
     data-theme="outline"
     data-text="signin_with"
     data-size="large"
     data-logo_alignment="left">
</div>
</template>

<style scoped>

</style>
