import { Input } from '@chakra-ui/react'

interface PrimaryInput {
name: string,
value: string,
onChange: 
}

export default function PrimaryInput(props : PrimaryInput){
    return(
        <Input variant='filled' placeholder='Filled' name={} />
    )
}