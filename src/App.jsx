import Header from './layout/Header';
import SideBar from './layout/SideBar';
import DialogBackDrop from './ui/DialogBackDrop';
import WorkSpace from './ui/WorkSpace';

function App() {
  return (
    <div className="mx-auto grid min-h-screen grid-cols-[auto_1fr] grid-rows-[100px_auto] bg-light-grey font-jakarta">
      <SideBar />
      <Header />
      <DialogBackDrop />
      <WorkSpace />
    </div>
  );
}

export default App;
