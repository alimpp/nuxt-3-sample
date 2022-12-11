<script lang="ts">
export default defineComponent({
  props: {
    mode: {
      type: String,
      default: 'normal',
    },
  },
  setup() {
    const sidebar = ref(null)

    onMounted(() => {
      // const { onScroll } = useSticky(sidebar.value, -1000)
      // setTimeout(() => onScroll(), 50)
    })

    return {
      sidebar,
    }
  },
})
</script>

<template>
  <aside
    ref="sidebar"
    :class="{
      'fixed top-0 hidden lg:flex w-16 h-screen ltr:border-r rtl:border-l dark:border-gray-700 hover:w-52 z-50 bg-white dark:bg-gray-900 transition-all':
        mode === 'normal',
      'relative flex-1 flex flex-col':
        mode === 'mobile',
    }"
  >
    <div
      class="flex-1 overflow-y-auto overflow-x-hidden sticky pl-4 ltr:lg:pl-0 ltr:pr-4 rtl:pr-4 rtl:lg:pr-0 rtl:pl-4 py-4"
    >
      <ul>
        <li>
          <Anchor
            :to="{ name: 'dashboard' }"
            class="sidebar-item group flex items-center mb-4 hover:no-underline"
          >
            <div
              class="flex items-center mx-4 px-2 py-2 rounded-md group-hover:ring-slate-900/10 ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:highlight-white/10 text-slate-500 dark:text-gray-100 group-hover:bg-gray-200 dark:group-hover:bg-slate-600': }"
            >
              <IconUil:apps class="tex" />
            </div>
            <span
              class="text-sm font-semibold capitalize"
            >
              {{ $t('pages.dashboard.nav') }}
            </span>
          </Anchor>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-item.router-link-active div {
  @apply text-primary-600 dark:text-primary-600 dark:bg-slate-700;
}

.sidebar-item.router-link-active span {
  @apply font-extrabold text-primary-600 dark:text-primary-600;
}
</style>
