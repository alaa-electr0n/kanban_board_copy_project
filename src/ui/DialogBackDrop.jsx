import DialogPrimitive from '../components/DialogPrimitive';
import AddNewBoardForm from './AddNewColumnBoard-v1';

function DialogBackDrop({ isOpen, setIsOpen, boardId }) {
  console.log({ boardId });
  return (
    <DialogPrimitive title="Edit Board" isOpen={isOpen} setOpen={setIsOpen}>
      <AddNewBoardForm setOpen={setIsOpen} boardId={boardId} />
      {/* <EditBoardForm setOpen={setIsOpen} /> */}
    </DialogPrimitive>
  );
}

export default DialogBackDrop;
