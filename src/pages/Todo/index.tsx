import { memo } from "react";
import { Title } from "../../common/components/Title";
import {
  useCreateCommentMutation,
  useMarkTodoMutation,
  useSingleToDoQuery,
  useTodoCommentsSubscription,
} from "../../generated/graphql";
import { useRouter } from "next/router";
import Head from "next/head";
import { Grid, Typography } from "@material-ui/core";

/**
 * Display and interact with a single Todo.
 */
const Todo = memo(() => {
  const {
    query: { id },
  } = useRouter();

  const { data: todoResponse, refetch } = useSingleToDoQuery({
    variables: { id },
  });
  const todo = todoResponse?.todo_by_pk;

  console.log(todo);

  const { data: commentsResponse } = useTodoCommentsSubscription({
    variables: { todoId: id },
  });
  const comments = commentsResponse?.comments;

  const [createComment] = useCreateCommentMutation();
  const [markTodo] = useMarkTodoMutation();

  return (
    <>
      <Head>
        <title>A ToDo</title>
      </Head>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Title>A ToDo</Title>
          <Typography variant="h3">
            Task:
            <br /> {todo?.title}
          </Typography>
          <Typography variant="body1">
            Description:
            <br />
            {todo?.description}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
});

export default Todo;
