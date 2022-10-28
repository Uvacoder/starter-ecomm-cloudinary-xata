import clsx from 'clsx'
import React, { Children } from 'react'

export default React.forwardRef(function Button(
  {
    variant = 'primary',
    loading = false,
    loadingText = 'loading...',
    children,
    ...attributes
  },
  ref
) {
  const handleClick = (e) => {
    if (!loading && attributes.onClick) {
      attributes.onClick(e)
    }
  }

  const variantClassname = clsx({
    ['bg-sky-600 text-white disabled:bg-sky-400 disabled:ring-0']:
      variant === 'primary',
    ['text-sky-600 disabled:text-sky-400']: variant === 'text',
  })

  return (
    <button
      {...attributes}
      className={clsx(
        'inline-block rounded-md px-7 py-3 text-sm font-semibold leading-snug transition duration-150 ease-in-out cursor-pointer ring-sky-300 hover:ring focus:ring active:ring',
        variantClassname,
        attributes.className
      )}
      disabled={attributes.disabled || loading}
      ref={ref}
      onClick={handleClick}
    >
      {loading
        ? loadingText
        : Children.map(children, (child, i) => {
            return (
              <span key={i} className="mr-xsmall last:mr-0">
                {child}
              </span>
            )
          })}
    </button>
  )
})
