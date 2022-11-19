import { FormControl } from "@chakra-ui/react"
import { useField } from "formik"


export const InputField = (props)=>{
    const [field,meta] = useField(props)
     const [label, ...restOfProps] = props
    return(
        <FormControl id={props.name} isInvalid={!!meta.error && !!meta.touched}>
            {
                label
            }
        </FormControl>
    )

}