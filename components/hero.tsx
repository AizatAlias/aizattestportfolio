import Image from 'next/image'

export function Hero() {
  return (
    <section className="py-20 text-center">
      <div className="relative flex justify-center items-center">
        <div className="group relative">
          {/* Profile Picture */}
          <Image
            src="/Testsajesaje.webp"
            alt="Muhammad Khairul Aizat Alias"
            width={200}
            height={200}
            className="rounded-full transition-transform duration-300 group-hover:scale-110"
          />
          {/* Glowing Rainbow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-4 mt-6">Muhammad Khairul Aizat Alias</h1>
      <p className="text-xl text-gray-600 mb-8">Mechanical Engineer</p>
      <p className="max-w-2xl mx-auto text-gray-600">
        Seeking a challenging engineering technical position to contribute my expertise and grow professionally in a progressive organization.
      </p>
    </section>
  )
}
