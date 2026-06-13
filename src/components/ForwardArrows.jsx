export default function ForwardArrows({ className = '', size = 'md' }) {
  const sizeClass = size === 'sm' ? 'forward-arrows--sm' : size === 'lg' ? 'forward-arrows--lg' : ''
  return (
    <span className={`forward-arrows ${sizeClass} ${className}`.trim()} aria-hidden="true">
      <span>&rsaquo;</span>
      <span>&rsaquo;</span>
      <span>&rsaquo;</span>
    </span>
  )
}
