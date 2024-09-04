import { createContext, useEffect, useReducer } from 'react';

/*
data =[
{
    "boardId": 1,
    "boardTitle": "board1",
    "columns": [
      {
        "columnId": 1,
        "taskTitle": "TODO",
        "tasks": [
          {
            "taskId": 1,
            "cardTitle": "card1",
            "description": "card1 description"
          },
          
    ]
  }
]
*/

export const TaskContext = createContext();

const initalState = {
  data: [],
  selectedBoardIndex: 0,
};

function reducerfn(state, action) {
  switch (action.type) {
    case 'load/data':
      return {
        ...state,
        data: action.payload,
      };

    case 'create/board':
      return {
        ...state,
        data: [...state.data, action.payload],
        selectedBoardIndex: state.data.length,
      };

    case 'update/board':
      return {
        ...state,
        data: state.data.map((board) => {
          board.boardId === action.payload.id
            ? {
                ...board,
                boardTitle: action.payload.boardTitle,
                columns: action.payload.columns,
              }
            : board;
        }),
      };

    case 'set/boardIndex':
      return {
        ...state,
        selectedBoardIndex: action.payload,
      };

    default:
      return state;
  }
}
function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(reducerfn, initalState);
  const { data: dataState, selectedBoardIndex } = state;

  // START OF  lOCAL STORAGE PART
  // Load data from localStorage if it exists
  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      // setDataState(JSON.parse(savedData));
      dispatch({ type: 'load/data', payload: JSON.parse(savedData) });
    }
  }, []);

  // Save updated dataState to localStorage whenever it changes
  useEffect(() => {
    if (dataState?.length > 0) {
      localStorage.setItem('data', JSON.stringify(dataState));
    }
  }, [dataState]);
  // END  OF  lOCAL STORAGE PART

  return (
    <TaskContext.Provider
      value={{
        data: dataState,
        selectedBoardIndex,
        dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
