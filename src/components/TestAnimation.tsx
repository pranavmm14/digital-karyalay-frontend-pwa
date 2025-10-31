import CentenaryLoader from '@/components/CentenaryLoader/CentenaryLoader'; // Adjust the path

const TestAnimation = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f2f5' }}>
      <CentenaryLoader />
    </div>
  );
};

export default TestAnimation;