import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Media } from './src/collections/Media'
import { Posts } from './src/collections/Posts'
import { Users } from './src/collections/Users'

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Posts, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  typescript: {
    outputFile: './src/payload-types.ts',
  },
})
