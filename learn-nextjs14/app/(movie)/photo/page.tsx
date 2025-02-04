'use client'

import { useSearchParams } from "next/navigation";

const Photo = () => {
  const searchParams = useSearchParams()
  
  return (
    <div>
      <img src={searchParams.get('path')} alt={searchParams.get('title')} />
    </div>
  );
};

export default Photo;
