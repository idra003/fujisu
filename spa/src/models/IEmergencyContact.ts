import { IContactInfo } from "./IContactInfo";
import { RelationshipType } from "./RelationshipType";

export interface IEmergencyContact extends IContactInfo {
    /**
     * Holds the relation type the person has to the employee
     */
    relationshipType:RelationshipType|null;
}