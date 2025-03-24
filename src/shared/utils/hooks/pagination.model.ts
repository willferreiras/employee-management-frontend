export default interface IPaginationModel<T> {
  page: number;
  pageSize: number;
  total: number;
  items: T[];
}
