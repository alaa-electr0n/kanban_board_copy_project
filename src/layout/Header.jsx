import { useContext, useState } from 'react';
import { Button } from '../components/Button';
import DialogBackDrop from '../ui/DialogBackDrop';
import DropDownMenu from '../ui/DropDownMenu';
import { TaskContext } from '../contexts/TaskContext';

function Header() {
  const { data = [], selectedBoardIndex } = useContext(TaskContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="col-[2/3] row-[1/2] flex max-h-[100px] items-center justify-between border-b border-b-lines-light bg-white px-4 pt-8">
      <p className="text-heading-m">
        PlateForm Launch ({data[selectedBoardIndex]?.boardTitle || ''})
      </p>
      <div className="flex items-center justify-evenly gap-8 p-4">
        <Button variant="primary" size="lg">
          + Add New Task
        </Button>
        <DropDownMenu setIsOpen={setIsOpen} />

        <DialogBackDrop
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          boardId={data[selectedBoardIndex]?.id}
        />
      </div>
    </header>
  );
}

export default Header;
