// faixa decorativa cromática suíço-bauhaus (blocos desiguais)
export default function ColorBar() {
  return (
    <div className="relative z-10 flex h-3 w-full">
      <div className="flex-1 bg-ink"></div>
      <div className="w-1/4 bg-accent"></div>
      <div className="w-1/12 bg-warm-light"></div>
    </div>
  )
}
