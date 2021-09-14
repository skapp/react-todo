import ApiResponse from './ApiResponse';

export default interface PagedResponse<T> extends ApiResponse<T> {
    pageNumber: number;
    pageSize: number;
    firstPage: string;
    lastPage: string;
    totalPages: number;
    totalRecords: number;
    nextPage: string;
    previousPage: string;
}