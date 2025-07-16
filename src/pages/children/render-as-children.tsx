import { useState } from "react";

const Child = () => {
  return <div className="bg-amber-100 p-2">Child Component</div>;
};

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-50 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <button className="bg-slate-100 p-4" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Open"}
        </button>
        {open && <div>ここにメニューが表示されます</div>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export const ContainerWithChild = () => {
  return (
    <Container>
      <Child />
    </Container>
  );
};
