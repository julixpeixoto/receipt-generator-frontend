import { Event } from './event.model';

export interface Receipt{
    customerName?: string;
    customerEmail?: string;
    events?: Event;
}