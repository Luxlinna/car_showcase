import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    // Add your state properties here
    title: string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    // Add your state properties here
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    // Add your state properties here from the Rapid API "result"
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}