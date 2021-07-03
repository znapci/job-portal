import { Skeleton } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react"
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { useHistory } from "react-router-dom";

const Paginator = ({ totalPages, currentPage }) => {
    let history = useHistory();
    //array frm 1 to totalPages in locations 0...totalPages-1
    let pageNos = [...Array(totalPages + 1).keys()].slice(1, totalPages + 1);
    let pageButtons = pageNos.map((no, index) => <Button key={index} onClick={() => { history.push(`/posts/${no}`) }}>{no}</Button>);
    pageButtons[currentPage - 1] = <Button key={currentPage - 1} isActive>{currentPage}</Button>
    return (
        <Skeleton borderRadius='base' isLoaded={totalPages}>
            <ButtonGroup>
                <Button disabled={currentPage === 1} onClick={() => history.push(`/posts/${1}`)}><ArrowLeftIcon /></Button>
                <Button disabled={currentPage === 1} onClick={() => history.push(`/posts/${--currentPage}`)}><ArrowBackIcon /></Button>
                {pageButtons.slice(currentPage - 1, currentPage + 3)}
                <Button disabled={currentPage === totalPages} onClick={() => history.push(`/posts/${++currentPage}`)}><ArrowForwardIcon /></Button>
                <Button disabled={currentPage === totalPages} onClick={() => history.push(`/posts/${totalPages}`)}><ArrowRightIcon /></Button>
            </ButtonGroup>
        </Skeleton>
    )
}
export default Paginator;