import { useContext } from 'react';
import Column from './Column';
import ColumnWithoutCard from './ColumnWithoutCard';
import { TaskContext } from '../contexts/TaskContext';

function WorkSpace() {
  const { data = [], selectedBoardIndex } = useContext(TaskContext);
  const columns = data[selectedBoardIndex]?.columns;
  console.log(columns);
  return (
    <div className="col-[2/3] row-[2/3] flex gap-4 overflow-y-scroll px-6 py-4">
      {/* // <div className="flex h-[calc(100vh-97px)] flex-1 gap-6 overflow-auto bg-light-grey p-6"> */}

      {columns?.length &&
        columns?.map((column) => (
          <Column
            key={column?.columnId}
            columnTitle={column?.title}
            tasks={column?.tasks}
          />
        ))}

      <ColumnWithoutCard />
    </div>
  );
}

export default WorkSpace;
