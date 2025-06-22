import Image, { ImageProps } from 'next/image';
import React, { FC } from 'react';

const CompanyLogo: FC<ImageProps> = (props) => {
  return (
    <div className="m-2 px-6 rounded-full overflow-hidden w-fit bg-neutral-100">
      <Image {...props} />
    </div>
  );
};

export default CompanyLogo;
