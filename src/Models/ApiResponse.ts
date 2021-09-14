export default interface ApiResponse<T> {
    succeeded:boolean;
    data:T;
    message:string;
    errors:string[];
    
}