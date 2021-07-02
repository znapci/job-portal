import { HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
//import { useHistory } from "react-router-dom";

const Paginator = ({ data }) => {
    //let history = useHistory();
    return (
        <HStack>
            <ButtonGroup>
                <Button><ArrowBackIcon /></Button>
                <Button>{data.currentPage}</Button>
                <Button><ArrowForwardIcon /></Button>
            </ButtonGroup>
        </HStack>
    )
}
export default Paginator;