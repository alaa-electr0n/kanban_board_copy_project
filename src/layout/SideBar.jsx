import { useContext, useState } from 'react';
import { Button } from '../components/Button';
import LogoIcon from '../ui/logoIcon';
import IconBoard from '../assets/icon-board.svg';
import ThemeBlock from '../ui/ThemeBlock';
import HideSideBarButton from '../ui/HideSideBarButton';
import DialogPrimitive from '../components/DialogPrimitive';
import clsx from 'clsx';
import { TaskContext } from '../contexts/TaskContext';
import AddNewBoardForm from '../ui/AddNewColumnBoard-v1';
// import CreateNewBoardForm from '../ui/CreateNewBoardForm';

/**
 *
 * @param {Object} props
 * @param {number} props.selectedBoardIndex
 * @param {Function} props.setSelectedBoardIndex
 * @param {Array} props.data
 * @returns {JSX.Element}
 */

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedBoardIndex, dispatch, data = [] } = useContext(TaskContext);
  return (
    <aside className="row-[1/-1] flex h-full flex-col border-r border-r-lines-light bg-white pt-10">
      <LogoIcon />
      <main className="mt-8 flex flex-col text-center">
        <p className="text-body-m text-lines">All Boards ({data.length})</p>
        {/* This should be dynamic based on the boards  //TODO
         */}
        <section className="mt-2">
          {data?.map((board, index) => (
            <Button
              key={board.id}
              variant="ghost"
              className={clsx(
                'flex w-11/12 items-center gap-4 rounded-e-full rounded-l-none px-8 py-4 text-heading-m text-medium-grey transition data-[isactive=false]:hover:bg-main-purple/10 data-[isactive=false]:hover:text-main-purple',
                {
                  'bg-main-purple !text-white hover:bg-main-purple':
                    selectedBoardIndex === index,
                },
              )}
              data-isactive={selectedBoardIndex === index}
              onClick={() =>
                dispatch({ type: 'set/boardIndex', payload: index })
              }
            >
              <img src={IconBoard} alt="icon board" />
              {board.title}
            </Button>
          ))}

          <DialogPrimitive
            title="Create New Board"
            isOpen={isOpen}
            setOpen={setIsOpen}
            triggerComponent={
              <Button
                variant="ghost"
                className="flex items-center gap-2 rounded-l-none hover:bg-main-purple-hover/50 focus:shadow"
              >
                <img src={IconBoard} alt="icon board" />+ Create New Board
              </Button>
            }
          >
            <AddNewBoardForm setOpen={setIsOpen} />
          </DialogPrimitive>
        </section>
      </main>

      <section className="mt-auto">
        <ThemeBlock />
        <HideSideBarButton />
      </section>
    </aside>
  );
}

export default SideBar;

{
  /* className={
                 'flex items-center gap-2 rounded-l-none hover:bg-main-purple-hover/50 ' +
                (selectedBoardIndex === index &&
                   'focus:bg-main-purple focus:text-white')}*/
}
