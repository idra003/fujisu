import { IPerson } from "../../models/IPerson";
import { IPersonBase } from "../../models/IPersonBase";

export interface IPersonDisplayProps {
    /**
     * Holds the person to be displayed
     */
    info?:IPersonBase|null
}