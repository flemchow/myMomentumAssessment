import { memo, useCallback, useState } from "react";
import { CircularProgress, Grid, TextField } from "@material-ui/core";
import { useCreateToDoMutation } from "../../../generated/graphql";

/**
 * A form which allows the user to submit a new todo.
 */
export const TodoForm = memo(() => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [hasTitle, setHasTitle] = useState(false);

  const [create, { loading }] = useCreateToDoMutation({
    variables: {
      todo: {
        title,
        description,
      },
    },
  });

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await create();
        setTitle("");
        setDescription("");
      } catch (e) {
        console.log(e);
      }
    },
    [create]
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="What do you need to do?"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        variant="outlined"
        error={hasTitle}
        fullWidth
      />
      <TextField
        label="Description of Task"
        value={description}
        multiline={true}
        onChange={(e) => setDescription(e.target.value)}
        variant="outlined"
        fullWidth
      />
    </form>
  );
});
