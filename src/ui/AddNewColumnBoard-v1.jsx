import { useContext, useEffect, useState } from 'react';
import { Button } from '../components/Button';
import TextField from '../components/TextField';
import iconCross from '../assets/icon-cross.svg';
import { TaskContext } from '../contexts/TaskContext';

function AddNewBoardForm({ setOpen, boardId }) {
  const { data, selectedBoardIndex, dispatch } = useContext(TaskContext);
  const [boardTitle, setBoardTitle] = useState('');
  const [columnsArray, setColumnsArray] = useState([
    { id: Date.now(), title: '' },
  ]);

  console.log({ data, selectedBoardIndex, boardId });
  useEffect(() => {
    if (boardId) {
      const board = data.find((b) => b.id === boardId);
      if (board) {
        setBoardTitle(board.title);
        setColumnsArray(
          board.columns.map((col) => ({ ...col, id: col.id || Date.now() })),
        );
      }
    }
  }, [boardId, data]);

  const removeColumnHandler = (id) => {
    setColumnsArray((prev) => prev.filter((column) => column.id !== id));
  };

  const addNewColumnHandler = () => {
    setColumnsArray((prev) => [...prev, { id: Date.now(), title: '' }]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBoardTitle = formData.get('boardName');

    const newColumns = columnsArray.map((column) => ({
      id: column.id,
      title: formData.get(`column-${column.id}`),
      tasks: column.tasks || [],
    }));

    if (boardId) {
      dispatch({
        type: 'update/board',
        payload: {
          id: boardId,
          title: newBoardTitle,
          columns: newColumns,
        },
      });
    } else {
      dispatch({
        type: 'create/board',
        payload: {
          id: Date.now(),
          title: newBoardTitle,
          columns: newColumns,
        },
      });
    }

    setOpen(false);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <h3 className="pb-2 pt-6 text-body-m text-medium-grey">Name</h3>
        <TextField
          placeholder="e.g. Web Design"
          name="boardName"
          value={boardTitle}
          onChange={(e) => setBoardTitle(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="pt-6 text-body-m text-medium-grey">Columns</h3>
        {columnsArray.map((column) => (
          <div key={column.id} className="flex items-center gap-4">
            <TextField
              placeholder="e.g. Todo"
              name={`column-${column.id}`}
              value={column.title}
              onChange={(e) => {
                setColumnsArray((prev) =>
                  prev.map((col) =>
                    col.id === column.id
                      ? { ...col, title: e.target.value }
                      : col,
                  ),
                );
              }}
              required
            />
            <button
              type="button"
              onClick={() => removeColumnHandler(column.id)}
            >
              <img src={iconCross} alt="icon cross" />
            </button>
          </div>
        ))}
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={addNewColumnHandler}
        >
          + Add New Column
        </Button>
      </div>
      <div className="mt-6">
        <Button type="submit" variant="primary" size="sm" isFullWidth>
          {boardId ? 'Save Changes' : 'Create New Board'}
        </Button>
      </div>
    </form>
  );
}

export default AddNewBoardForm;

/*
 const { data, selectedBoardIndex, dispatch } = useContext(TaskContext);
  const [columnsArray, setColumnsArray] = useState([{ id: Date.now() }]);

  const boardId = data[selectedBoardIndex]?.boardId;
  const boardTitle = data[selectedBoardIndex]?.boardTitle;

  const removeColumnHandler = (id) => {
    setColumnsArray((prev) => prev.filter((column) => column.id !== id));
  };

  const addNewColumnHandler = () => {
    setColumnsArray((prev) => [
      ...prev,
      { id: Date.now(), tasks: [{ taskTitle: '' }] },
    ]);
  };

  function handleFormSubmit(e) {
    e.preventDefault();

    const formDate = new FormData(e.target);
    const boardName = formDate.get('boardName'); //string
    const columnsName = columnsArray.map(
      (
        columnInput, //array of tasksTitles
      ) => formDate.get(columnInput.id),
    );
    console.log(boardName, columnsName);

    const newColumnObj = {
      columnId: Date.now(),
    };
  }



*/
