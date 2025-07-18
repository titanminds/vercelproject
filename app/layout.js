import "@/node_modules/react-modal-video/css/modal-video.css"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode'

import { barlow, firaSans } from '@/lib/font'

export const metadata = {
    title: 'Fxvibe React Next Js Template',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${firaSans.variable} ${barlow.variable}`}>
            <head>
                {/* ✅ Correct way to load CSS from /public */}
                <link rel="stylesheet" href="/assets/css/bootstrap.css" />
                <link rel="stylesheet" href="/assets/css/color.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
            </head>
            <body>{children}</body>
        </html>
    )
}
