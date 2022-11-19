import { FormControl, FormLabel, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { useField } from "formik"


export const InputField = (props)=>{
    const [field,meta] = useField(props)
     const [label,leftAddon, ...restOfProps] = props
    return(
        <FormControl id={props.name} isInvalid={!!meta.error && !!meta.touched}>
            {label && (<FormLabel mb={'1'} htmlFor={props.name}>
                label
            </FormLabel>)
            }
            <InputGroup>

        {leftAddon && <InputLeftAddon bg="purple.50" children={leftAddon} />}
            </InputGroup>
        </FormControl>
    )

}