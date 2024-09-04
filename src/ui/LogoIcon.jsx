function LogoIcon() {
  return (
    <div className="flex items-center gap-2 justify-center px-4">
      <div className="space-x-[2px]">
        <span className="w-[6px] h-[24px] inline-block bg-main-purple rounded-sm"></span>
        <span className="w-[6px] h-[24px] inline-block bg-main-purple/70 rounded-sm"></span>
        <span className="w-[6px] h-[24px] inline-block bg-main-purple/40 rounded-sm"></span>
      </div>
      <h1 className="text-heading-xl">Kanban Board</h1>
    </div>
  );
}

export default LogoIcon;
