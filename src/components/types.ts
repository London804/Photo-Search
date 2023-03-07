export interface Pagination {
    onPageChange: Function;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
    className?: string;
}