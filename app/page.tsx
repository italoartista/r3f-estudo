import AnimatedTorus from '@/components/AnimatedTorus'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full h-[600px]">
        <AnimatedTorus />
      </div>
    </main>
  )
}

