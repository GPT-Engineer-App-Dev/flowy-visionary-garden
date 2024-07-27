import FlowChart from '../components/FlowChart';

const Index = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Data Structures and Algorithms Flow Chart</h1>
      <div className="w-full h-[800px] border border-gray-300 rounded-lg overflow-hidden">
        <FlowChart />
      </div>
    </div>
  );
};

export default Index;
