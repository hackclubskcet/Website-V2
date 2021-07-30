import { Avatar as Chakav } from "@chakra-ui/react"

export default function Avatar({ name, picture }) {
  return (
    
    <div className="flex items-center">
      <Chakav name={name} src={picture}  alt={name} />
      <div className="text-xl font-bold">&nbsp;{name}</div>
    </div>

  )
}
