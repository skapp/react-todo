import { ReactChild } from "react";

export interface EmptyLayoutProp {
    children: ReactChild | ReactChild[];
}

const EmptyLayout = (props: EmptyLayoutProp) => {
    return (
        <div>
            {props.children}
        </div>
    );
};
export default EmptyLayout;
