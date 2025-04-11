import { Suspense } from 'react';
import EditPrompt from '@components/EditPrompt';

const  Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
}

export default Page
