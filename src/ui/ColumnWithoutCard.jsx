import { Button } from '../components/Button';
function ColumnWithoutCard() {
  return (
    <div className="flex w-72 shrink-0 flex-col space-y-2 self-start rounded-lg bg-lines-light px-4 py-3 shadow">
      <Button variant="ghost" className="text-medium-grey">
        + New Column
      </Button>
    </div>
  );
}

export default ColumnWithoutCard;
