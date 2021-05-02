import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { Todo as TodoType } from "../../../generated/graphql";
import { memo } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/styles";

interface TodoProps {
  todo: Pick<TodoType, "title" | "id" | "complete">;
}

const useStyles = makeStyles({
  link: {
    cursor: "pointer",
  },
});

/**
 * Display an individual todo in the list.
 */
export const Todo = memo(({ todo }: TodoProps) => {
  const classes = useStyles();

  return (
    <Grid item key={todo.id}>
      <Link href={`/todo/${todo.id}`}>
        <Paper elevation={1} className={classes.link}>
          <Box p={2}>
            <Typography variant="h5">{todo.title}</Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
});
