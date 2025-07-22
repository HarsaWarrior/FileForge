import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="p-6 bg-white rounded-xl shadow-lg">
        <SignIn />
      </div>
    </div>
  )
}