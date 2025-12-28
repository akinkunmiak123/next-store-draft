function AboutPage() {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        We love building a store that puts people first. Our goal is to make
        shopping simple, enjoyable, and reliable by offering carefully selected
        products you can trust. We focus on quality, fair pricing, and a smooth
        experience from search to checkout, so you can spend less time browsing
        and more time enjoying what you buy.
      </p>
    </section>
  )
}
export default AboutPage
