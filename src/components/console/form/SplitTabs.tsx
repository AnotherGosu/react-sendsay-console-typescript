import Split from 'react-split';

export default function SplitTabs({children}: {children: React.ReactNode}) {
  const sizes = localStorage.getItem('split-sizes');

  return (
    <Split
      style={{
        display: 'flex',
        padding: '10px 15px',
      }}
      sizes={sizes ? JSON.parse(sizes) : [50, 50]}
      minSize={400}
      onDragEnd={(sizes) => {
        localStorage.setItem('split-sizes', JSON.stringify(sizes));
      }}
    >
      {children}
    </Split>
  );
}
