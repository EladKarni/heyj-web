import type { Metadata } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

import config from '@payload-config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'

import '@payloadcms/next/css'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

type Args = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Payload Admin',
  description: 'Payload CMS Admin Panel',
}

const Layout = ({ children }: Args) => {
  const importMap = {
    baseDir: path.resolve(dirname)
  }
  
  const serverFunction = async (args: any) => {
    'use server'
    return { success: true }
  }

  return (
    <RootLayout 
      config={config}
      importMap={importMap}
      serverFunction={serverFunction}
    >
      {children}
    </RootLayout>
  )
}

export default Layout
