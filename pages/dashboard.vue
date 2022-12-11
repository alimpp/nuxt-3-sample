<script lang="ts" setup>
definePageMeta({
  layout: "dashboard",
  middleware: ["application", "auth"],
});
</script>

<template>
  <PageWrapper>
    <PageHeader>
      <PageTitle :text="$t('pages.dashboard.title')" class="capitalize" />
    </PageHeader>
    <PageBody>
      <PageSection> Do something here </PageSection>
    </PageBody>
  </PageWrapper>
</template>
