import React from 'react';
import { NotionPageItemSkeleton } from '@/components/notion/NotionPageItem/Skeleton';

export const NotionPageListSkeleton = () => {
  return (
    <>
      {[...Array(5)].map((item, idx) => (
        <div key={idx}>
          <NotionPageItemSkeleton />
        </div>
      ))}
    </>
  );
};
