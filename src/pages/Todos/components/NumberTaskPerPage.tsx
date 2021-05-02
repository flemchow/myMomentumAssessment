import { useContext } from "react";
import { ButtonGroup, Button, Grid, Typography } from "@material-ui/core";
import { TaskPerPageContext } from "../context";

interface TaskPerPageProps {
  numPerPageArray: { id: string; value: number }[];
}

export default function NumberTaskPerPage(props: TaskPerPageProps) {
  const { limit, setLimit } = useContext(TaskPerPageContext);

  return (
    <Grid container justify="center" direction="column">
      <Typography variant="body1">Tasks per Page: </Typography>
      <ButtonGroup>
        {props.numPerPageArray.map((element) => {
          const { id, value } = element;
          return (
            <Button
              key={`${id} button`}
              color="secondary"
              variant="contained"
              onClick={() => {
                setLimit(value);
              }}
            >
              {id}
            </Button>
          );
        })}
      </ButtonGroup>
    </Grid>
  );
}
