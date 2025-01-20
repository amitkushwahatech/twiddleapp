import {Inter} from 'next/font/google'
import { Metadata} from 'next'
import '../globals.css'
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata: Metadata = {
    title: 'Twidle',
    description: "Social media platform"
}


const inter = Inter({
    subsets: ['latin']
})

export default  function RootLayout({children}  : Readonly<{
    children: React.ReactNode
} >
 ) {
    return (
        <>
        <html lang='en'>
            <body>
                <main className={`${inter.className} bg-dark-1`}>
                    <ClerkProvider>

                    <div className="w-full flex justify-center items-center min-h-screen">
                        {children}
                    </div>
                    </ClerkProvider>
                </main> 
            </body>
        </html>
        </>
    )
}