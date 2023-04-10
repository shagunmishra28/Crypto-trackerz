type ButtonVariantsType = {
  [key: string]: string
  regular: string
  outline: string
}

interface ButtonProps {
  variant: 'regular' | 'outline'
  render: (variant: string) => JSX.Element
}

export default function Button({ variant, render }: ButtonProps) {
  const buttonVariants: ButtonVariantsType = {
    regular: '',
    outline: ''
  }

  return render(buttonVariants[variant])
}
