import { useState } from "react";
import Head from "next/head";
import { Box, Button, Grid, Paper, Typography } from "@material-ui/core";
import { Title } from "../../common/components/Title";
import { useToDoListSubscription } from "../../generated/graphql";

import { NumberTaskPerPage, Pagination, Todo, TodoForm } from "./components";
import { PageOffsetContext, TaskPerPageContext } from "./context";
/**
 * List the todos.
 * @constructor
 */
const ToDos = () => {
  const tasksPerPage = 5;
  const tasksPerPageArray = [
    { id: "Three", value: 3 },
    { id: "Five", value: 5 },
    { id: "Ten", value: 10 },
    { id: "Fifteen", value: 15 },
  ];
  const [limit, setLimit] = useState<number>(tasksPerPage);
  const [offset, setOffset] = useState<number>(0);

  const { data } = useToDoListSubscription({
    variables: {
      limit,
      offset,
    },
  });

  return (
    <>
      <Head>
        <title>ToDos</title>
      </Head>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Title>ToDo</Title>
        </Grid>
        <Grid item>
          <TodoForm />
        </Grid>
        {data?.todo.map((todo) => (
          <Todo todo={todo} />
        ))}
        <Grid>
          <hr />
          <Grid container justify="center" direction="row">
            <Grid container justify="center" direction="row">
              <PageOffsetContext.Provider value={{ offset, setOffset }}>
                <Pagination numTasks={data?.todo.length} limit={limit} />
              </PageOffsetContext.Provider>
              <TaskPerPageContext.Provider value={{ limit, setLimit }}>
                <NumberTaskPerPage numPerPageArray={tasksPerPageArray} />
              </TaskPerPageContext.Provider>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ToDos;
