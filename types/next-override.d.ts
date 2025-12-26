// types/next-override.d.ts
declare module 'next' {
  export type PageProps<P = any> = {
    params: P
    searchParams?: Record<string, string | string[] | undefined>
  }
}
