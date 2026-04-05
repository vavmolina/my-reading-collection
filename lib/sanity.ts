import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'mp7lue0z',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01'
})