<script lang="ts" setup>
const { t } = useLang()

useHead({
  titleTemplate: '%s - ' + t('pages.dashboard.title'),
})
</script>

<template>
  <div>
    <slot name="app-before" />
    <div id="app-before"></div>
    <div class="flex">
      <div class="py-4">
        <DashboardSidebar />
      </div>
      <div class="flex flex-col min-h-screen w-full ltr:lg:ml-16 rtl:lg:mr-16">
        <slot name="header">
          <DashboardNavbar>
            <template #drawer>
              <DashboardSidebar mode="mobile" />
            </template>
          </DashboardNavbar>
        </slot>
        <div class="flex-1 w-full flex flex-col">
          <div
            class="relative flex-1 flex flex-row mx-auto max-w-8xl w-full h-full"
          >
            <div class="flex flex-col w-full">
              <slot />
              <!-- <slot name="footer">
                <PageFooter />
              </slot> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot name="app-after" />
    <div id="app-after"></div>
  </div>
</template>
