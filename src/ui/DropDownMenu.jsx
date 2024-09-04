import DropdownPrimitive from '../components/DropDownPrimitive';
import iconVerticalEllipsis from '../assets/icon-vertical-ellipsis.svg';
import { TaskContext } from '../contexts/TaskContext';
import { useContext } from 'react';

function DropDownMenu({ setIsOpen }) {
  const { selectedBoardIndex, setDataState } = useContext(TaskContext);
  function onEditBoard() {
    setIsOpen(true);
    console.log('edit board');
  }

  function onDeleteBoard() {
    if (window.confirm('Are you sure you want to delete this board?'))
      return setDataState((prev) => prev.toSpliced(selectedBoardIndex, 1));
  }

  return (
    <DropdownPrimitive
      items={{
        edit: { label: 'Edit Board', onClick: onEditBoard },
        delete: {
          label: 'Delete Board',
          onClick: onDeleteBoard,
        },
      }}
      triggerComponent={() => (
        <button className="justify-baseline flex gap-2 text-[14px] font-bold text-main-purple">
          <img src={iconVerticalEllipsis} alt="icon vertical ellipsis" />
        </button>
      )}
    />
  );
}

export default DropDownMenu;
