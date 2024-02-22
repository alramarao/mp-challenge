export interface PaginatedResponse<T> {
	data: T[];
	pagination: Pagination;
}

export interface Pagination {
    offset: number;
    limit: number;
    total: number;
}