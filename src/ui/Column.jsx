import Card from './Card';
import { Button } from '../components/Button';

/**
 *
 * @param {Object} props
 * @param {string} props.columnTitle
 * @param {Array} props.tasks
 * @returns {JSX.Element}
 */
function Column({ columnTitle, tasks }) {
  return (
    <div className="flex w-72 shrink-0 flex-col space-y-2 self-start rounded-lg bg-lines-light px-4 py-3 shadow">
      <h3 className="relative top-0 rounded bg-lines-light px-2 py-4 text-heading-s">
        {columnTitle} ({tasks?.length})
      </h3>
      <div className="flex flex-col gap-2 border-b border-light-grey pb-5">
        {tasks?.map((task) => (
          <Card key={task?.taskId} cardTitle={task?.cardTitle} />
        ))}
      </div>
      <Button variant="ghost" className="text-medium-grey">
        + Add new task
      </Button>
    </div>
  );
}

export default Column;
