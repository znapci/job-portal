import { HStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useHistory } from "react-router-dom";

const Paginator = ({ totalPages, currentPage }) => {
    let history = useHistory();
    let pageNos = [...Array(totalPages).keys()]
    let pageButtons = pageNos.map((no, index) => <Button key={index} onClick={() => { history.push(`/posts/${no + 1}`) }}>{no + 1}</Button>);

    return (
        <HStack>
            <ButtonGroup>
                <Button disabled={currentPage === 1} onClick={() => history.push(`/posts/${1}`)}><ArrowLeftIcon /></Button>
                <Button disabled={currentPage === 1} onClick={() => history.push(`/posts/${--currentPage}`)}><ArrowBackIcon /></Button>
                {pageButtons.slice(currentPage - 1, currentPage + 3)}
                <Button disabled={currentPage === totalPages} onClick={() => history.push(`/posts/${++currentPage}`)}><ArrowForwardIcon /></Button>
                <Button disabled={currentPage === totalPages} onClick={() => history.push(`/posts/${totalPages}`)}><ArrowRightIcon /></Button>
            </ButtonGroup>
        </HStack >
    )
}
export default Paginator;