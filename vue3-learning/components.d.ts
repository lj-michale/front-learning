declare module 'vue' {
  export interface GlobalComponents {
    LangSelect: typeof import('./src/components/lang/langSelect.vue')['default']
  }
}
