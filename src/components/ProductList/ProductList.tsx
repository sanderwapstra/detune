import React from 'react';
import StyledProductList from './ProductList.styles';
import { ReactComponent as ArrowRight } from '../../static/svg/ArrowRight.svg';

export type ProductTypes = {
    title: string;
    url: string;
    image: string;
};

type Props = {
    title: string;
    items: ProductTypes[];
    moreUrl?: string;
};

const ProductList: React.FC<Props> = ({ title, items, moreUrl }) => (
    <StyledProductList>
        <h3 className="title">{title}</h3>

        <ul>
            {items.map(({ title, url, image }) => (
                <li>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="itemTitle">{title}</div>
                    </a>
                </li>
            ))}
        </ul>

        {moreUrl && (
            <a
                className="more"
                href={moreUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                View more on Amazon
                <ArrowRight width="32" height="32" />
            </a>
        )}
    </StyledProductList>
);

export default ProductList;
