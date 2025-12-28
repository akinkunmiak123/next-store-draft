import Link from "next/link"
import { Button } from "../ui/button"
import HeroCarousel from "./HeroCarousel"

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Discover a smarter, more convenient way to shop for quality products
          you’ll love. We bring carefully selected items together in one place,
          making it easy to find what you need without stress. From comfort and
          style to value and reliability, every product is chosen to make your
          everyday life better.
        </p>

        <Button asChild size="lg" className="mt-10">
          <Link href="/products" className="text-white">
            {' '}
            Our Products{' '}
          </Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  )
}
export default Hero