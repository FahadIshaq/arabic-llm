import Image from "next/image"
import Link from "next/link"

const dialects = [
  {
    name: "Modern Standard Arabic",
    code: "msa",
    flag: "/placeholder.svg?height=60&width=60",
    description: "Formal Arabic used in media and literature",
  },
  {
    name: "Egyptian Arabic",
    code: "egy",
    flag: "/placeholder.svg?height=60&width=60",
    description: "Widely understood dialect from Egypt",
  },
  {
    name: "Levantine Arabic",
    code: "lev",
    flag: "/placeholder.svg?height=60&width=60",
    description: "Spoken in Syria, Lebanon, Jordan, Palestine",
  },
  {
    name: "Gulf Arabic",
    code: "gulf",
    flag: "/placeholder.svg?height=60&width=60",
    description: "Spoken in Saudi Arabia, UAE, Qatar, Kuwait",
  },
  {
    name: "Maghrebi Arabic",
    code: "mag",
    flag: "/placeholder.svg?height=60&width=60",
    description: "Spoken in Morocco, Algeria, Tunisia",
  },
  {
    name: "Iraqi Arabic",
    code: "irq",
    flag: "/placeholder.svg?height=60&width=60",
    description: "Spoken in Iraq",
  },
]

export default function LanguageSelector() {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
      {dialects.map((dialect) => (
        <Link
          key={dialect.code}
          href={`/signup?dialect=${dialect.code}`}
          className="flex flex-col items-center p-3 sm:p-4 rounded-lg border bg-white hover:shadow-md transition-shadow hover:border-primary/20 touch-action-manipulation"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mb-2 sm:mb-3 bg-gray-100 flex items-center justify-center">
            <Image
              src={dialect.flag || "/placeholder.svg"}
              alt={dialect.name}
              width={60}
              height={60}
              className="object-cover"
            />
          </div>
          <h3 className="font-medium text-center text-sm sm:text-base">{dialect.name}</h3>
          <p className="text-xs text-gray-500 text-center mt-1 hidden sm:block">{dialect.description}</p>
        </Link>
      ))}
    </div>
  )
}
