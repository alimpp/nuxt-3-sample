<script lang="ts" setup>
export interface IMenuItem {
  type: "link" | "button";
  text: string;
  href?: any;
  route?: any;
}
import { useApplicationUser } from "~~/stores/applicationUser";
const user = useApplicationUser();
const phoneNumber = user.phoneNumber
const { t } = useLang();
</script>

<template>
  <BuilderNavbar>
    <template #banner>
      <div
        class="text-white text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"
      >
        <span class="mr-1">
          {{ $t("banners.welcome", { app_name: t("app.name") }) }}
          <Anchor
            class="underline font-bold"
            :text="$t('others.learn_more')"
            href="https://www.radgiri.com"
          />
        </span>
      </div>
    </template>
    <template #menu>
      <div class="relative hidden lg:flex items-center ltr:ml-auto rtl:mr-auto">
        <div class="flex items-center justify-center">
          <img
            class="w-6 h-6 rounded-full"
            src="https://avatars.nikavazeh.ir/pixel-art/695c82d08a3c9237a6e3208c5264d"
            alt="Avatar of Jonathan Reinink"
          />
          <span class="ltr:ml-2 rtl:mr-2 text-sm font-semibold">{{phoneNumber}}</span>
          <IconUil:angle-down />
        </div>
        <div
          class="flex space-x-4 rtl:space-x-reverse ltr:border-l rtl:border-r ltr:ml-6 rtl:mr-6 ltr:pl-6 rtl:pr-6 border-gray-900/10 dark:border-gray-50/[0.2]"
        >
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </template>
    <template #options="{ toggleOptions }">
      <ActionSheet @onClose="toggleOptions(false)">
        <ActionSheetBody>
          <ActionSheetHeader :text="$t('components.menu')" />
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t("components.theme_switcher.change_theme") }}
          </div>
          <div class="mt-2">
            <ThemeSwitcher type="select-box" />
          </div>
          <div class="mt-6 text-sm font-bold capitalize">
            {{ $t("components.language_switcher.change_language") }}
          </div>
          <div class="mt-2">
            <LanguageSwitcher type="select-box" />
          </div>
        </ActionSheetBody>
        <Button text="Close" type="secondary" @click.prevent="toggleOptions(false)" />
      </ActionSheet>
    </template>
    <template #drawer>
      <slot name="drawer" />
    </template>
  </BuilderNavbar>
</template>
