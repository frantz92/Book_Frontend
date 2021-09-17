/**
 * my-thai-star
 * my thai star example application
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface InvitedGuestDTO { 
    creationDate?: string;
    creationUser?: string;
    modificationDate?: string;
    modificationUser?: string;
    version?: number;
    id?: string;
    /**
     * The acceptance of invitation.
     */
    accepted?: boolean;
    /**
     * The Booking id.
     */
    bookingId?: number;
    /**
     * The email.
     */
    email?: string;
    /**
     * The guest token.
     */
    guestToken?: string;
    /**
     * The Order id.
     */
    orderId: number;
}
