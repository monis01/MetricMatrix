import { lastValueFrom, Observable } from "rxjs";

export const isEmptyObject = (object: object) => {
    return object ? Object.keys(object).length === 0 && object.constructor === Object : true;
};


export const convertIntoPromise = (observable: Observable<any>): Promise<any> => {
   return lastValueFrom(observable);
}