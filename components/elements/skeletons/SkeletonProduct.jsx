import React from 'react';
import { Skeleton } from 'antd';

const SkeletonProduct = () => {
    return (
        <div className="ps-skeleton--product">
            <Skeleton.Input active={true} size={350} style={{ height: 200 }} />
            <Skeleton paragraph={{ rows: 4 }} />
        </div>
    );
};

export default SkeletonProduct;
