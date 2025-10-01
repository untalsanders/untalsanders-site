'use client'

interface DeleteButtonProps {
  slug: string
  action: (formData: FormData) => Promise<void>
}

export default function DeleteButton({ slug, action }: DeleteButtonProps) {
  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault()
    if (confirm('¿Estás seguro de que quieres eliminar este post?')) {
      const formData = new FormData()
      formData.append('slug', slug)
      await action(formData)
    }
  }

  return (
    <form onSubmit={handleDelete} className="inline">
      <button
        type="submit"
        className="text-red-600 hover:text-red-900"
      >
        Eliminar
      </button>
    </form>
  )
}