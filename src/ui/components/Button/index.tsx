import * as S from './styles'

interface Button {
  label: string
  onClick: () => void
  disabled?: boolean
}

export function Button({ label, onClick, disabled = false }: Button) {
  return (
    <S.Button role="button" onClick={onClick} disabled={disabled}>
      {label}
    </S.Button>
  )
}
