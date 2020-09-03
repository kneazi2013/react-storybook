import React from "react";
import cn from "classnames";
import "./button.scss";

export enum TypeButton {
    Default = "btn-default",
    Primary = "btn-primary",
    Secondary = "btn-secondary",
}

type Props = {
    type: TypeButton;
    label?: string;
    icon?: Function;
    customClass?: string;
    onClick?: () => void;
};

const Button = (props: Props) => {
    const { type, label, icon, customClass } = props;
    const { onClick } = props;

    return (
        <button
            className={cn(`btn ${type}`, {
                [customClass]: typeof customClass === "string",
            })}
            onClick={onClick}
        >
            {icon && <span className="btn-icon">{icon()}</span>}
            {label && <span className="btn-label">{label}</span>}
        </button>
    );
};

Button.defaultProps = {
    type: TypeButton.Default,
};

export default Button;
