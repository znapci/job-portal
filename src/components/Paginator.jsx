import { HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useHistory } from "react-router-dom";

const Paginator = ({ totalPages, currentPage }) => {
    let history = useHistory();

    return (
        <HStack>
            <ButtonGroup>
                <Button disabled={currentPage === 1} onClick={() => history.push(`/posts/${--currentPage}`)}><ArrowBackIcon /></Button>
                <Button>{currentPage}</Button>
                <Button disabled={currentPage === totalPages} onClick={() => history.push(`/posts/${++currentPage}`)}><ArrowForwardIcon /></Button>
            </ButtonGroup>
        </HStack >
    )
}
export default Paginator;