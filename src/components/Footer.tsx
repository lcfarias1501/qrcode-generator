
import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { RiQrCodeLine } from 'react-icons/ri'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className=" relative border-t border-[var(--border)] bg-white mt-16">
            <div className="container mx-auto max-w-6xl px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <RiQrCodeLine size={24} className="text-[var(--main)]" />
                            <span className="font-semibold text-lg">QR Generator</span>
                        </Link>
                        <p className="text-[var(--muted)] text-sm">
                            Create beautiful QR codes instantly for your business and personal needs.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com"
                                className="text-[var(--muted)] hover:text-[var(--main)] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://twitter.com"
                                className="text-[var(--muted)] hover:text-[var(--main)] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://linkedin.com"
                                className="text-[var(--muted)] hover:text-[var(--main)] transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/generate" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    Generate QR
                                </Link>
                            </li>
                            <li>
                                <Link href="/history" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    History
                                </Link>
                            </li>
                            <li>
                                <Link href="/examples" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    Examples
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/docs" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    User Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/api" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    API
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[var(--border)] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-[var(--muted)]">
                        © {currentYear} QR Generator. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                            Terms
                        </Link>
                        <Link href="/contact" className="text-[var(--muted)] hover:text-[var(--main)] transition-colors">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}