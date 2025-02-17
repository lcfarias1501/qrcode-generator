// app/page.tsx
import Link from 'next/link'
import { RiQrCodeLine } from 'react-icons/ri'
import { HiArrowRight } from 'react-icons/hi'
import Pricing from '@/components/Pricing'
import '../styles/HeroSection.css'

export default function Home() {
  return (
    <div className="py-12 heroSection">

      {/* Hero Section */}
      <div className="text-center space-y-6 mb-16 h-[50vh] items-center justify-center flex flex-col px-2">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-[var(--main)] via-blue-400 to-blue-600 text-transparent bg-clip-text">
          Generate QR Codes Instantly
        </h1>
        <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto">
          Create custom QR codes for your links in seconds. Free, fast, and no sign-up required.
        </p>
        <Link
          href="/generate"
          className="inline-flex items-center gap-2 bg-[var(--main)] text-white px-8 py-3 rounded-lg hover:bg-[var(--main-hover)] transition-all transform hover:scale-105 font-medium text-lg"
        >
          Create Your QR Code Now
          <HiArrowRight />
        </Link>
      </div>

      <Pricing />

      {/* Demo Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
          <RiQrCodeLine size={32} className="text-[var(--main)]" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Create Your QR Code?
        </h2>
        <p className="text-[var(--muted)] mb-8 max-w-xl mx-auto">
          Whether it's for your business, social media, or personal use,
          get started now and create your custom QR code in seconds.
        </p>
        <Link
          href="/generate"
          className="inline-flex items-center gap-2 bg-[var(--main)] text-white px-6 py-3 rounded-lg hover:bg-[var(--main-hover)] transition-all transform hover:scale-105"
        >
          Start Generating
          <HiArrowRight />
        </Link>
      </div>
    </div>
  )
}