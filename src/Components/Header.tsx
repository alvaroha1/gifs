import { Headers, Main } from '../Styles/Header'

export default function Header() {
  const title = "Gif Selector"
  const subtitle = "Powered by GIPHY"
  return (
    <Main>
      <Headers>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </Headers>
    </Main>
  )
}
