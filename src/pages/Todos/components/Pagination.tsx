import React, { useContext } from "react";
import { PageOffsetContext } from "../context";
import { Button, ButtonGroup } from "@material-ui/core";

interface TasksLength {
  numTasks: number;
  limit: number;
}

export default function Pagination(props: TasksLength) {
  const { offset, setOffset } = useContext(PageOffsetContext);

  return (
    <ButtonGroup variant="text">
      <Button
        onClick={() => {
          if (offset > 0) {
            setOffset(offset - 1);
          }
        }}
      >
        Previous Page
      </Button>
      <Button
        onClick={() => {
          if (props.numTasks === props.limit) {
            setOffset(offset + 1);
          }
        }}
      >
        Next Page
      </Button>
    </ButtonGroup>
  );
}
