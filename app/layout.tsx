import type { Metadata } from 'next'
import './globals.css'
import Sidebar from './components/Sidebar'
import SupabaseProvider from '../providers/SupabaseProvider'
import UserProvider from '../providers/UserProvider'

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SupabaseProvider>
          <UserProvider>
            <Sidebar>{children}</Sidebar>
          </UserProvider>
        </SupabaseProvider>
        
      </body>
    </html>
  )
}
