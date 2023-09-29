import { IContactInfo } from "./IContactInfo";
import { IPersonBase } from "./IPersonBase";
import { RelationshipType } from "./RelationshipType";

export interface IEmergencyContact extends IContactInfo, IPersonBase {
    /**
     * Holds the relation type the person has to the employee
     */
    relationshipType:RelationshipType|null;
}