import * as S from './styles'

type PokeballProps = {
  height: number
  width: number
}

const Pokeball = ({ height, width }: PokeballProps) => (
  <S.Wrapper>
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 735 735"
      fillRule="evenodd"
      clipRule="evenodd"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
    >
      <path d="M367 0C165 0 0 165 0 367c0 203 165 368 367 368 203 0 368-165 368-368C735 165 570 0 367 0zm139 377c-5 72-65 129-139 129-73 0-133-57-138-129H17c5 188 160 340 350 340s346-152 350-340H506zM367 261c59 0 106 48 106 106 0 59-47 106-106 106-58 0-106-47-106-106 0-58 48-106 106-106zm0 32c42 0 75 33 75 74 0 42-33 75-75 75-41 0-74-33-74-75 0-41 33-74 74-74zm0 35c22 0 40 17 40 39s-18 40-40 40-39-18-39-40 17-39 39-39z" />
    </svg>
  </S.Wrapper>
)

export default Pokeball
