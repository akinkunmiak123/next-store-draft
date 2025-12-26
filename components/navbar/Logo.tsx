import Link from "next/link"
import { Button } from "../ui/button"
import { VscCode } from 'react-icons/vsc'


function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
      <VscCode className='w-8 h-8 text-white'/>
      </Link>
    </Button>
  )
}
export default Logo