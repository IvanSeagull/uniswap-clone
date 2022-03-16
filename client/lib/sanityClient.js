import sanityClient from '@sanity/client'
import { sanityToken } from '../../config'

export const client = sanityClient({
  projectId: '7thl8hkt',
  dataset: 'production',
  apiVersion: 'v1',
  token: sanityToken,
  useCdn: false,
})
