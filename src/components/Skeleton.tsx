interface SkeletonProps {
  className: string
}

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className="animate-pulse">
      <div className={`bg-slate-300 rounded-md ${className}`} />
    </div>
  )
}
