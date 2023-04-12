import { NuxtAuthHandler } from '#auth'
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
import YandexProvider from 'next-auth/providers/yandex'

export default NuxtAuthHandler({
  secret: 'my-secret',

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    YandexProvider.default({
      clientId: 'bb66051bbcda4523ba405d24faab5f04',
      clientSecret: 'e05f2bb90fcd4515957fe6ee12c24c3c'
    })
  ],

  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL || '',
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY || '',
  }),
})