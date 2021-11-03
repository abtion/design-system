import React from "react"
import "./index.scss"

export default function ModalTop({ children }: ModalTopProps) {
  return (
    <div className="ModalTop">
      <div className="ModalTop__content">{children}</div>
    </div>
  )
}

type ModalTopProps = {
  children: React.ReactNode
}
